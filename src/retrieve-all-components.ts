import {Component} from './component/component';
import { Lead } from './component/lead';
import axios from 'axios';

export async function retrieveAllComponents(jiraDomain: string, projectId: string) {
  const componentsData = await axios.get(
    `https://${jiraDomain}/rest/api/${projectId}/project/SP/components`
  );

  return componentsData.data.map((componentData) => {
    let lead;

    if (componentData.lead) {
      lead = new Lead(componentData.lead.displayName);
    }

    return new Component(componentData.id, componentData.name, lead);
  })
}