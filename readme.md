# react-better-state 🚀🔥🎨

## Overview

`react-better-state` is a custom React hook designed to facilitate state management using a Proxy-based approach, allowing direct property assignments. While this method offers intuitive state handling, developers should be aware of its potential performance implications, particularly when dealing with large state objects or frequent updates. ⚠️⚡🛠️

Utilizing JavaScript's `Proxy` object to manage state updates introduces a layer of abstraction that, while useful, may impact performance in scenarios requiring high-frequency updates. It is advisable to profile application performance and assess whether this approach aligns with your specific use case. Should performance bottlenecks arise, alternative state management paradigms such as `useReducer` or centralized state solutions (e.g., Redux or Zustand) may be more appropriate. 📊🧐🔧

## New Feature: onChange Callback 🚀🔄🎯

The `onChange` callback is an optional enhancement that allows developers to react dynamically to state modifications. When specified, this callback is triggered whenever a state property is updated, enabling real-time state tracking and integration with external effects such as logging, analytics, or side-effect execution. 📢⚡📌

## Installation 🚀📦💻

To install `react-better-state`, execute the following command:

```bash
npm install react-better-state
```

### Or

```bash
yarn add react-better-state
```

## Usage Example 🎨🖥️🛠️

The example below demonstrates how `react-better-state` can be integrated into a React component. The `onChange` callback is utilized to monitor state updates in real time.

```tsx
import React from "react";
import { useBetterState } from "react-better-state";

type MyType = {
  name: string;
  age: number;
};

function App() {
  const obj = useBetterState<MyType>(
    { name: "Daniel", age: 19 },
    {
      onChange: (newState) => {
        console.log("State updated:", newState);
      },
    }
  );

  return (
    <div>
      <h2>{`Name: ${obj.name}`}</h2>
      <h2>{`Age: ${obj.age}`}</h2>
      <button
        onClick={() => {
          obj.age = 18;
          obj.name = "Updated Name";
        }}
      >
        Modify State
      </button>
    </div>
  );
}

export default App;
```

### Explanation ✅📜🎯

In this example, the `useBetterState` hook creates a proxy-based state object that enables direct property manipulation. When a state property is modified, the `onChange` callback logs the updated state. If the options object is omitted, the hook still functions seamlessly, but without executing any additional operations upon state modification. This flexibility makes `react-better-state` a useful alternative for simple, component-level state management where fine-grained reactivity is required.
