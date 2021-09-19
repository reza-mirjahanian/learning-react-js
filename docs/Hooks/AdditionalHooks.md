
### `useReducer`
```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
An alternative to [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate). Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method.

`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. `useReducer` also lets you optimize performance for components that trigger deep updates because [you can pass  `dispatch`  down instead of callbacks](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down).

#### Lazy initialization
You can also create the initial state lazily. To do this, you can pass an `init` function as the third argument. The initial state will be set to `init(initialArg)`.
```
function init(initialCount) {  return {count: initialCount};}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':      return init(action.payload);    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```
#### Bailing out of a dispatch

If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the  [`Object.is`  comparison algorithm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description).)

### `useCallback`

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

Returns a  [memoized](https://en.wikipedia.org/wiki/Memoization)  callback.

Pass an inline callback and an array of dependencies.  `useCallback`  will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g.  `shouldComponentUpdate`).

`useCallback(fn, deps)`  is equivalent to  `useMemo(() => fn, deps)`.

### `useMemo`

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Returns a  [memoized](https://en.wikipedia.org/wiki/Memoization)  value.

Pass a “create” function and an array of dependencies.  `useMemo`  will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Remember that the function passed to  `useMemo`  runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in  `useEffect`, not  `useMemo`.

If no array is provided, a new value will be computed on every render.

### `useRef`

```
const refContainer = useRef(initialValue);
```

`useRef`  returns a mutable ref object whose  `.current`  property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

This works because `useRef()` creates a plain JavaScript object. The only difference between `useRef()` and creating a `{current: ...}` object yourself is that `useRef` will give you the same ref object on every render.

### `useImperativeHandle`

```
useImperativeHandle(ref, createHandle, [deps])
```

`useImperativeHandle`  customizes the instance value that is exposed to parent components when using  `ref`. As always, imperative code using refs should be avoided in most cases.  `useImperativeHandle`  should be used with  [`forwardRef`](https://reactjs.org/docs/react-api.html#reactforwardref):

```
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

### `useLayoutEffect`

The signature is identical to  `useEffect`, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside  `useLayoutEffect`  will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard  `useEffect`  when possible to avoid blocking visual updates.

> Tip
>
> If you’re migrating code from a class component, note  `useLayoutEffect`  fires in the same phase as  `componentDidMount`  and  `componentDidUpdate`. However,  **we recommend starting with  `useEffect`  first**  and only trying  `useLayoutEffect`  if that causes a problem.
>
> If you use server rendering, keep in mind that  _neither_  `useLayoutEffect`  nor  `useEffect`  can run until the JavaScript is downloaded. This is why React warns when a server-rendered component contains  `useLayoutEffect`. To fix this, either move that logic to  `useEffect`  (if it isn’t necessary for the first render), or delay showing that component until after the client renders (if the HTML looks broken until  `useLayoutEffect`  runs).
>
> To exclude a component that needs layout effects from the server-rendered HTML, render it conditionally with  `showChild && <Child />`  and defer showing it with  `useEffect(() => { setShowChild(true); }, [])`. This way, the UI doesn’t appear broken before hydration.
>
### `useDebugValue`

```
useDebugValue(value)
```

`useDebugValue`  can be used to display a label for custom hooks in React DevTools.

#### Defer formatting debug values

In some cases formatting a value for display might be an expensive operation. It’s also unnecessary unless a Hook is actually inspected.

For this reason  `useDebugValue`  accepts a formatting function as an optional second parameter. This function is only called if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.

For example a custom Hook that returned a  `Date`  value could avoid calling the  `toDateString`  function unnecessarily by passing the following formatter:

```
useDebugValue(date, date => date.toDateString());
```
