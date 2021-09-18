
## When to Use Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

## Caveats

Because context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders. For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for  `value`:

```
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>        <Toolbar />
      </MyContext.Provider>
```
