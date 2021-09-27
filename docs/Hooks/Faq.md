### Which versions of React include Hooks?

Starting with 16.8.0, React includes a stable implementation of React Hooks for:

-   React DOM
-   React Native
-   React DOM Server
-   React Test Renderer
-   React Shallow Renderer

### Do Hooks cover all use cases for classes?

Our goal is for Hooks to cover all use cases for classes as soon as possible. There are no Hook equivalents to the uncommon  `getSnapshotBeforeUpdate`,  `getDerivedStateFromError`  and  `componentDidCatch`  lifecycles yet, but we plan to add them soon.

### How to get the previous props or state?

Currently, you can do it manually  [with a ref](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables):

### Can I make a ref to a function component?

While you shouldn’t need this often, you may expose some imperative methods to a parent component with the  [`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)  Hook.
