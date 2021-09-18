
The term [“render prop”](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) refers to a technique for sharing code between React components using a prop whose value is a function.

### Be careful when using Render Props with React.PureComponent

Using a render prop can negate the advantage that comes from using  [`React.PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent)  if you create the function inside a  `render`  method. This is because the shallow prop comparison will always return  `false`  for new props, and each  `render`  in this case will generate a new value for the render prop.

To get around this problem, you can sometimes define the prop as an instance method
