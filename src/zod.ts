import { z } from "zod";

export const LOADING_STATUS = {
  idle: "idle",
  pending: "pending",
  fullfiled: "fullfiled",
  error: "error",
};

export type LoadingStatus = keyof typeof LOADING_STATUS;

export const SYSTEM_PARTS = {
  front: "front",
  back: "back",
  db: "db",
} as const;

export type SystemParts = keyof typeof SYSTEM_PARTS;

export const SYSTEM_TYPES = {
  dev: "dev",
  test: "test",
  prod: "prod",
} as const;

export type SystemTypes = keyof typeof SYSTEM_TYPES;

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
