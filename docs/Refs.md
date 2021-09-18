Refs provide a way to access DOM nodes or React elements created in the render method.

### When to Use Refs

There are a few good use cases for refs:

-   Managing focus, text selection, or media playback.
-   Triggering imperative animations.
-   Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.

For example, instead of exposing  `open()`  and  `close()`  methods on a  `Dialog`  component, pass an  `isOpen`  prop to it.

#### Refs and Function Components

By default,  **you may not use the  `ref`  attribute on function components**  because they don’t have instances:

If you want to allow people to take a  `ref`  to your function component, you can use  [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html)  (possibly in conjunction with  [`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)), or you can convert the component to a class.

You can, however,  **use the  `ref`  attribute inside a function component**  as long as you refer to a DOM element or a class component

**Ref forwarding lets components opt into exposing any child component’s ref as their own**.

### Callback Refs

React also supports another way to set refs called “callback refs”, which gives more fine-grain control over when refs are set and unset.
