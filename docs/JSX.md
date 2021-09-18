
### Functions as Children
```
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}    </Repeat>
  );
}
```
### Booleans, Null, and Undefined Are Ignored
```
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```
Conversely, if you want a value like  `false`,  `true`,  `null`, or  `undefined`  to appear in the output, you have to  [convert it to a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion)  first:

```
<div>
  My JavaScript variable is {String(myVariable)}.</div>
```
