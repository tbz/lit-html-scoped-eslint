type CustomElementTagName = `${string}-${string}`;
type TODO = any;

export function createHtml(scopedTags: Record<CustomElementTagName, TODO>) {
    console.log(scopedTags);
    return String.raw;
    /*return function html(strings, ...values) {
        TODO
    }*/
}
