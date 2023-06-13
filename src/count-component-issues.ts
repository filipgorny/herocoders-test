import axios from 'axios';
import { Component } from './component/component';

export async function countComponentsIssues(jiraDomain: string, projectId: string, component: Component) {
  const issuesData = await axios.get(`https://${jiraDomain}/rest/api/${projectId}/search/?jql=component=${component.id}`)

  return issuesData.data.total;
}