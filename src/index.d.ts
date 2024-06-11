// index.d.ts
declare module "react-better-state" {
  /**
   * A custom hook that manages state and provides a proxy to interact with state properties directly.
   *
   * @template T - The type of the initial state object.
   * @param initialObj - The initial state object.
   * @returns A proxy to interact with state properties directly.
   */
  export function useBetterState<T extends object>(initialObj: T): T;
}
