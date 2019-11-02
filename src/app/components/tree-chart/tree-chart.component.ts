import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-tree-chart',
  templateUrl: './tree-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tree-chart.component.scss']
})
export class TreeChartComponent implements OnInit {

  @ViewChild('chart', { static: true })
  private chartContainer: ElementRef;

  @Input() loading: boolean;

  private margin = { top: 45, right: 50, bottom: 70, left: 65 };
  private width: number;
  private height: number;

  private element;



  constructor() {
    //
  }

  ngOnInit() {

    this.width = this.chartContainer.nativeElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = this.chartContainer.nativeElement.offsetHeight - this.margin.top - this.margin.bottom;
    this.element = this.chartContainer.nativeElement;
  }

  public buildTree(treeData) {
    d3.select('svg').remove();
    let svg = d3.select(this.element).append('svg')
      .attr('width', this.element.offsetWidth)
      .attr('height', this.element.offsetHeight - 100)
      .append('g')
      .attr('transform', 'translate('
        + this.margin.left + ',' + this.margin.top + ')');



    // declares a tree layout and assigns the size
    let treeMap = d3.tree().size([this.height, this.width]);

    // Assigns parent, children, height, depth
    let root, i = 0, duration;
    root = d3.hierarchy(treeData, function (d) { return d.dependencies; });
    root.x0 = this.height / 2;
    root.y0 = 0;
    let colorScale = d3.scaleLinear()
      .domain([0, 1])
      .range(['red', 'green']);
    let widthScale = d3.scaleLinear()
      .domain([1, 80])
      .range([1, 10]);
    update(root);

    function update(source) {

      // Assigns the x and y position for the nodes
      var treeData = treeMap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      // Normalize for fixed-depth.
      nodes.forEach(function (d) { d.y = d.depth * 180; });

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll('g.node')
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function (d) {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', click);

      // Add Circle for the nodes
      nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        })
        .style('stroke', function (d) { return colorScale(d.data.female / (d.data.female + d.data.male)); });

      // Add labels for the nodes
      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('x', function (d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr('text-anchor', function (d) {
          return d.children || d._children ? 'end' : 'start';
        })
        .text(function (d) { return d.data.package.name + ' ' + d.data.package.version; })
        .style('fill', function (d) { return colorScale(d.data.female / (d.data.value)); });

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        })
        .attr('cursor', 'pointer');


      // Remove any exiting nodes
      var nodeExit = node.exit().transition()
        .duration(duration)
        .attr('transform', function (d) {
          return 'translate(' + source.y + ',' + source.x + ')';
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
      var link = svg.selectAll('path.link')
        .data(links, function (d) { return d.id; })
        .style('stroke-width', function (d) {
          return widthScale(d.data.value);
        });

      // Enter any new links at the parent's previous position.
      var linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function (d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        })
        .style('stroke-width', function (d) {
          return widthScale(d.data.value);
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(duration)
        .attr('d', function (d) { return diagonal(d, d.parent); });

      // Remove any exiting links
      var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function (d) {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .style('stroke-width', function (d) {
          return widthScale(d.data.value);
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {

        let path = `M ${s.y} ${s.x}
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
        update(d);
      }

    }

  }
}
