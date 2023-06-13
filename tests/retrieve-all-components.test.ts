import "assert";
import { retrieveAllComponents } from '../src/retrieve-all-components';
import { Component } from '../src/component/component';

describe("The retrieve all components function", () => {
    it("should return components from the Hero Coders Jira endpoint", async () => {
        const components = await retrieveAllComponents('herocoders.atlassian.net', '3')

        expect(components.length).toBeGreaterThan(0);
        expect(components[0]).toBeInstanceOf(Component);
    });
});