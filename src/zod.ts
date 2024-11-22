import { z } from "zod";
import { SYSTEM_PARTS, SYSTEM_TYPES } from "./consts";

export const zodSystemData = z.object({
  [SYSTEM_PARTS.back]: z.number().min(0),
  [SYSTEM_PARTS.db]: z.number().min(0),
  [SYSTEM_PARTS.front]: z.number().min(0),
});

export type SystemData = z.infer<typeof zodSystemData>;

export const zodDataVisualizer = z.object({
  title: z.string().min(1),
  norm: z.number().min(0),
  [SYSTEM_TYPES.dev]: zodSystemData,
  [SYSTEM_TYPES.test]: zodSystemData,
  [SYSTEM_TYPES.prod]: zodSystemData,
});

export type zodDataVisualizer = z.infer<typeof zodDataVisualizer>;
