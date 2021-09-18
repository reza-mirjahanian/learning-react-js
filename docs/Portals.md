Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
```
ReactDOM.createPortal(child, container)
```

The first argument (`child`) is any  [renderable React child](https://reactjs.org/docs/react-component.html#render), such as an element, string, or fragment. The second argument (`container`) is a DOM element.

A typical use case for portals is when a parent component has an `overflow: hidden` or `z-index` style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.

. An event fired from inside a portal will propagate to ancestors in the containing _React tree_, even if those elements are not ancestors in the _DOM tree_
