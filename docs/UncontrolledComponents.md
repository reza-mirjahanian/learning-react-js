To write an uncontrolled component, instead of writing an event handler for every state update, you can [use a ref](https://reactjs.org/docs/refs-and-the-dom.html) to get form values from the DOM.

Since an uncontrolled component keeps the source of truth in the DOM, it is sometimes easier to integrate React and non-React code when using uncontrolled components. It can also be slightly less code if you want to be quick and dirty. Otherwise, you should usually use controlled components.

### Default Values

In the React rendering lifecycle, the  `value`  attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a  `defaultValue`  attribute instead of  `value`. Changing the value of  `defaultValue`  attribute after a component has mounted will not cause any update of the value in the DOM.

Likewise, `<input type="checkbox">` and `<input type="radio">` support `defaultChecked`, and `<select>` and `<textarea>` supports `defaultValue`.

In React, an `<input type="file" />` is always an uncontrolled component because its value can only be set by a user, and not programmatically.
