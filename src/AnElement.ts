import { AnOtherElement } from "./AnOtherElement.js";
import { BaseElement } from "./BaseElement.js";
import { createHtml } from "./createHtml.js";

const html = createHtml({
    'an-other-element': AnOtherElement
});

export class AnElement extends BaseElement {
    render() {
        return html`
            <an-other-element></an-other-element>
            <missing-element></missing-element>
        `;
    }
}
