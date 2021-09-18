
Note

Error boundaries do  **not**  catch errors for:

-   Event handlers ([learn more](https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers))
-   Asynchronous code (e.g.  `setTimeout`  or  `requestAnimationFrame`  callbacks)
-   Server side rendering
-   Errors thrown in the error boundary itself (rather than its children)

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods [`static getDerivedStateFromError()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror) or [`componentDidCatch()`](https://reactjs.org/docs/react-component.html#componentdidcatch). Use `static getDerivedStateFromError()` to render a fallback UI after an error has been thrown. Use `componentDidCatch()` to log error information.

**As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.**
