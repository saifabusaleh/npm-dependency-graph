import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';
import { DependencyAPIResponse } from 'src/app/types/dependency-api-response';
import { TreeLogic } from './tree-logic';

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

  private margin = { top: 10, right: 50, bottom: 40, left: 100 };
  private width: number;
  private height: number;

  private element;

  constructor() {
    //
  }

  ngOnInit() {

    this.width = this.chartContainer.nativeElement.offsetWidth;
    this.height = this.chartContainer.nativeElement.offsetHeight;
    this.element = this.chartContainer.nativeElement;
  }

  public buildTree(dependenciesResponse: DependencyAPIResponse) {
    if (dependenciesResponse.tree.package.name.length + dependenciesResponse.tree.package.version.length >= 15) {
      this.margin.left = 150;
    }
    d3.select('svg').remove();
    const svg = d3.select(this.element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate('
        + this.margin.left + ',' + this.margin.top + ')');



    // declares a tree layout and assigns the size
    const treeMap = d3.tree().size([this.height - this.margin.top - this.margin.bottom, this.width - this.margin.left - this.margin.right]);

    // Assigns parent, children, height, depth
    const treeHierarchy = d3.hierarchy(dependenciesResponse.tree, (d) => d.dependencies);
    treeHierarchy.x0 = this.height / 2;
    treeHierarchy.y0 = 0;

    const treeLogic = new TreeLogic(svg, treeMap, treeHierarchy);
    treeLogic.update(dependenciesResponse);
  }
}
