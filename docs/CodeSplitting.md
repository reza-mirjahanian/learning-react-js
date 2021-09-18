## `import()`
```
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```
## `React.lazy`

> Note:
>
> `React.lazy`  and Suspense are not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we recommend  [Loadable Components](https://github.com/gregberge/loadable-components).
>
`React.lazy` takes a function that must call a dynamic `import()`. This must return a `Promise` which resolves to a module with a `default` export containing a React component.

```
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## Named Exports

`React.lazy`  currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default.
