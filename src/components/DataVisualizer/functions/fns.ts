import { zodSystemData } from "@/src/zod";

Object.prototype.sumSystemDataValues = function (this: zodSystemData): number {
  if (typeof this === "object") {
    return Object.values(this).reduce((a, v) => a + v, 0) ?? 0;
  }
  throw new Error("sumSystemDataValues data type error.");
};
