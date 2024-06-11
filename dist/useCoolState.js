"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCoolState = (initialObj) => {
    const [state, setState] = (0, react_1.useState)(initialObj);
    const stateRef = (0, react_1.useRef)(state);
    // Update stateRef whenever state changes
    stateRef.current = state;
    const setProperty = (0, react_1.useCallback)((key, value) => {
        setState((prevState) => {
            if (prevState[key] === value) {
                // If the value hasn't changed, do nothing
                return prevState;
            }
            // Create a new state object only if the value has changed
            return Object.assign(Object.assign({}, prevState), { [key]: value });
        });
    }, []);
    const handler = {
        get(target, property, receiver) {
            // Return the property value from the stateRef to avoid stale state
            return Reflect.get(stateRef.current, property, receiver);
        },
        set(target, property, value, receiver) {
            // Update the state when a property is set on the proxy
            setProperty(property, value);
            return true;
        },
    };
    const proxy = (0, react_1.useRef)(new Proxy(state, handler)).current;
    return proxy;
};
exports.default = useCoolState;
