/**
 * Creates an instance of the element for the specified tag.
 * @param tagName The name of an element.
 */
function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions
): HTMLElementTagNameMap[K];
/** @deprecated */
function createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions
): HTMLElementDeprecatedTagNameMap[K];
function createElement(
  tagName: string,
  options?: ElementCreationOptions
): HTMLElement;

function createElement(tagName: string, options?: ElementCreationOptions) {
  // eslint-disable-next-line ban/ban
  const node = document.createElement(tagName, options);
  // @ts-ignore
  node.setAttribute('data-cp-zv', __ZENT_COMPAT_VERSION__);
  return node;
}

export default createElement;
