# react-better-state

A custom React hook to manage state with proxy-based direct property assignments. **Note:** This approach can have performance issues, especially for large state objects or frequent updates.

Using a Proxy to manage state updates can introduce performance overhead, especially if your state object is large or if there are frequent updates. It's essential to profile your application and ensure this approach meets your performance requirements. If you encounter performance issues, consider alternative state management strategies.

## Installation

```bash
npm install react-better-state
```

## Example

```ts
...
import React from "react";
import { useCoolState } from "react-better-state";

type MyType = {
  name: string;
  age: number;
};

function App() {
  const obj = useCoolState<MyType>({ name: "daniel", age: 19 });

  return (
    <>
      <div>
        <h2>{`name: ${obj.name}`}</h2>
        <h2>{`age: ${obj.age}`}</h2>
        <button
          onClick={() => {
            obj.age = 18;
            obj.name = "some other name";
          }}
        >
          Change
        </button>
      </div>
    </>
  );
}
...
```
