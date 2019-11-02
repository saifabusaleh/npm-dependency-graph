import {Package} from './Package';

export class DependencyTree {
  package: Package;
  dependencies: DependencyTree[];
}
