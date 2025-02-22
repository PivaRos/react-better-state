// index.d.ts
declare module "react-better-state" {
  /**
   * Options for configuring the state hook.
   *
   * @template T - The type of the state object.
   */
  export type StateOptions<T> = {
    /**
     * A callback invoked whenever the state changes.
     *
     * @param newState - The updated state object.
     */
    onChange: (newState: T) => void;
  };

  /**
   * A custom hook that manages state and provides a proxy to interact with state properties directly.
   *
   * @template T - The type of the initial state object.
   * @param initialObj - The initial state object.
   * @param options - Configuration options, including an onChange callback.
   * @returns A proxy to interact with state properties directly.
   */
  export function useBetterState<T extends object>(
    initialObj: T,
    options?: StateOptions<T>
  ): T;

  export default useBetterState;
}
