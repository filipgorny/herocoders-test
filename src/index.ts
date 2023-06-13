import * as dotenv from "dotenv";
import { retrieveAllComponents } from "./retrieve-all-components";
import { countComponentsIssues } from "./count-component-issues";
import { terminal } from "terminal-kit";

dotenv.config();

(async () => {
  const allComponents = await retrieveAllComponents(process.env.jiraDomain, process.env.projectId);

  const components = [];

  for (const component of allComponents) {
    if (component.lead == undefined) {
      components.push(component);
    }
  }

  for (const component of components) {
    component.issuesCount = await countComponentsIssues(process.env.jiraDomain, process.env.projectId, component)
  };

  terminal.bold("List of components without a lead, with their issues count\n\n");

  components.forEach((component) => {
    terminal.red('id: ').yellow(`${component.id}\n`);
    terminal.red('name: ').yellow(`${component.name}\n`);
    terminal.red('issues count: ').yellow(`${component.issuesCount}\n`);
    terminal("\n")
  })
})();