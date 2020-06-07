export class TreeLogic {
    private svg;
    private treeMap;
    private treeHierarchy;

    constructor(svg, treeMap, treeHierarchy) {
        this.svg = svg;
        this.treeMap = treeMap;
        this.treeHierarchy = treeHierarchy;
    }
    update(dependenciesResponse) {
        let  i = 0;
        // tslint:disable-next-line: prefer-const
        let duration;

        // Assigns the x and y position for the nodes
        const treeData = this.treeMap(this.treeHierarchy);

        // Compute the new tree layout.
        const nodes = treeData.descendants();
        const links = treeData.descendants().slice(1);

        // Normalize for fixed-depth.
        nodes.forEach((d) => { d.y = d.depth * 180; });

        // ****************** Nodes section ***************************

        // Update the nodes...
        const node = this.svg.selectAll('g.node')
          .data(nodes, (d)  => d.id || (d.id = ++i));

        // Enter any new modes at the parent's previous position.
        const nodeEnter = node.enter().append('g')
          .attr('class', 'node')
          .attr('transform', (d)  =>  {
            return 'translate(' + this.treeHierarchy.y0 + ',' + this.treeHierarchy.x0 + ')';
          })
          .on('click', click);

        // Add Circle for the nodes
        nodeEnter.append('circle')
          .attr('class', 'node')
          .attr('r', 1e-15)
          .style('fill', (d) => {
            return d._children ? 'lightsteelblue' : '#fff';
          });

        // Add labels for the nodes
        nodeEnter.append('text')
          .attr('dy', '.35em')
          .attr('x', (d) => {
            return d.children || d._children ? -13 : 13;
          })
          .attr('text-anchor', (d) => {
            return d.children || d._children ? 'end' : 'start';
          })
          .text((d) => d.data.package.name + '  ' + d.data.package.version)
          .style('font-size', dependenciesResponse.size < 40 ? '13px' : '11px');
        //  .call(wrap, 50);
        // UPDATE
        const nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate.transition()
          .duration(duration)
          .attr('transform', (d) => {
            return 'translate(' + d.y + ',' + d.x + ')';
          });

        // Update the node attributes and style
        nodeUpdate.select('circle.node')
          .attr('r', 1)
          .style('fill', (d) => {
            return d._children ? 'lightsteelblue' : '#fff';
          })
          .attr('cursor', 'pointer');


        // Remove any exiting nodes
        const nodeExit = node.exit().transition()
          .duration(duration)
          .attr('transform', (d) => {
            return 'translate(' + this.treeHierarchy.y + ',' + this.treeHierarchy.x + ')';
          })
          .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select('circle')
          .attr('r', 1e-6);

        // On exit reduce the opacity of text labels
        nodeExit.select('text')
          .style('fill-opacity', 1e-6);

        // ****************** links section ***************************

        // Update the links...
        const link = this.svg.selectAll('path.link')
          .data(links, (d) => d.id);

        // Enter any new links at the parent's previous position.
        const linkEnter = link.enter().insert('path', 'g')
          .attr('class', 'link')
          .attr('d', (d)  =>  {
            const o = { x: this.treeHierarchy.x0, y: this.treeHierarchy.y0 };
            return diagonal(o, o);
          });

        // UPDATE
        const linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate.transition()
          .duration(duration)
          .attr('d', (d)  => diagonal(d, d.parent));

        // Remove any exiting links
        const linkExit = link.exit().transition()
          .duration(duration)
          .attr('d', (d)  => {
            const o = { x: this.treeHierarchy.x, y: this.treeHierarchy.y };
            return diagonal(o, o);
          }).remove();

        // Store the old positions for transition.
        nodes.forEach((d)  =>  {
          d.x0 = d.x;
          d.y0 = d.y;
        });

        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {

          const path = `M ${s.y} ${s.x}
                  C ${(s.y + d.y) / 2} ${s.x},
                    ${(s.y + d.y) / 2} ${d.x},
                    ${d.y} ${d.x}`;

          return path;
        }

        // Toggle children on click.
        function click(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          this.update(d);
        }
      }
}
