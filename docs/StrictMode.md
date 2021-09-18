```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>      <Footer />
    </div>
  );
}
```
In the above example, strict mode checks will  _not_  be run against the  `Header`  and  `Footer`  components. However,  `ComponentOne`  and  `ComponentTwo`, as well as all of their descendants, will have the checks.

`StrictMode`  currently helps with:

-   [Identifying components with unsafe lifecycles](https://reactjs.org/docs/strict-mode.html#identifying-unsafe-lifecycles)
-   [Warning about legacy string ref API usage](https://reactjs.org/docs/strict-mode.html#warning-about-legacy-string-ref-api-usage)
-   [Warning about deprecated findDOMNode usage](https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)
-   [Detecting unexpected side effects](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
-   [Detecting legacy context API](https://reactjs.org/docs/strict-mode.html#detecting-legacy-context-api)
