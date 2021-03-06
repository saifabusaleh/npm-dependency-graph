import { HttpService } from '../../services/http-service/http.service';
import { TreeChartComponent } from '../tree-chart/tree-chart.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DependencyAPIResponse } from 'src/app/types/dependency-api-response';

@Component({
  selector: 'app-dependencies-tree',
  templateUrl: './npm-dependencies-tree.component.html',
  styleUrls: ['./npm-dependencies-tree.component.scss']
})
export class DependenciesTreeComponent implements OnInit {
  public isLoading: boolean;

  @ViewChild(TreeChartComponent, { static: false }) treeChartComponent: TreeChartComponent;

  public treeData: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    //
  }

  getPackageDependencies(pkgName: string) {
    this.isLoading = true;
    this.httpService.getPackageDependecies(pkgName).subscribe((response: DependencyAPIResponse) => {
      this.isLoading = false;
      this.treeChartComponent.buildTree(response);
    }, () => {
      this.isLoading = false;
    });
  }
}
