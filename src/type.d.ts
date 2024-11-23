import { zodSystemData } from "./zod";

global {
  export interface Object {
    sumSystemDataValues: (this: zodSystemData) => number;
  }
}
