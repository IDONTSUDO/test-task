import { ArrayExtensions } from "./array";

declare global {
  interface Array<T> {
    add(element: T): Array<T>;
  }
}
export const extensions = () => {
  ArrayExtensions();
};
