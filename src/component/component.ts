import { Lead } from './lead';

export class Component {
  public issuesCount = 0;

  constructor(public id: string, public name: string, public lead?: Lead) {}
}