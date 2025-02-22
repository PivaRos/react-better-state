import { useState, useRef, useCallback } from "react";

export type StateOptions<T> = { onChange?: (newState: T) => void };

const useBetterState = <T extends Object>(
  initialObj: T,
  { onChange = () => {} }: StateOptions<T> = {}
) => {
  const [state, setState] = useState<T>(initialObj);
  const stateRef = useRef(state);

  // Update stateRef whenever state changes
  stateRef.current = state;

  const setProperty = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setState((prevState) => {
      if (prevState[key] === value) {
        // If the value hasn't changed, do nothing
        return prevState;
      }
      // Create a new state object only if the value has changed
      onChange({
        ...prevState,
        [key]: value,
      });
      return {
        ...prevState,
        [key]: value,
      };
    });
  }, []);

  const handler: ProxyHandler<T> = {
    get(target, property, receiver) {
      // Return the property value from the stateRef to avoid stale state
      return Reflect.get(stateRef.current, property, receiver);
    },
    set(target, property, value, receiver) {
      // Update the state when a property is set on the proxy
      setProperty(property as keyof T, value);
      return true;
    },
  };

  const proxy = useRef(new Proxy(state, handler)).current;

  return proxy;
};

export default useBetterState;
