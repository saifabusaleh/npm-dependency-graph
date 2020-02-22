import {Package} from './package';

export class DependencyTree {
  package: Package;
  dependencies: DependencyTree[];
}
