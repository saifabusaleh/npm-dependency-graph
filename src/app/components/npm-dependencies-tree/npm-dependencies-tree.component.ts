import { NpmDependencyRetrieverService } from './../../services/npm-dependency-retriever/npm-dependency-retriever.service';
import { TreeChartComponent } from '../tree-chart/tree-chart.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NpmDependencyManagerService } from 'src/app/services/npm-dependency-manager/npm-dependency-manager.service';
import { Package } from 'src/app/types/Package';

@Component({
  selector: 'app-dependencies-tree',
  templateUrl: './npm-dependencies-tree.component.html',
  styleUrls: ['./npm-dependencies-tree.component.scss']
})
export class DependenciesTreeComponent implements OnInit {
  public isLoading: boolean;

  @ViewChild(TreeChartComponent, { static: false }) treeChart: TreeChartComponent;

  public treeData: any;
  constructor(private depManager: NpmDependencyManagerService,
    private depRetriever: NpmDependencyRetrieverService) {
  }

  ngOnInit() {
    //
  }

  getPackageDependencies(pkgName: string) {
    this.depRetriever.getPackageLatestVersion(pkgName).subscribe((pkgVersion: string) => {
      let pkg: Package = new Package(pkgName, pkgVersion);
      this.isLoading = true;
      this.depManager.getPackageDependencies(pkg).subscribe((treeData) => {
        this.isLoading = false;
        this.treeChart.buildTree(treeData);
      });
    });
  }
}
