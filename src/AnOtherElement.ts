import { BaseElement } from "./BaseElement.js";
import { createHtml } from "./createHtml.js";

const html = createHtml({});

export class AnOtherElement extends BaseElement {
    render() {
        return html`
            <p></p>
        `;
    }
}
