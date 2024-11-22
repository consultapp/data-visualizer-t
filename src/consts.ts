export const LOADING_STATUS = {
  idle: "idle",
  pending: "pending",
  fullfiled: "fullfiled",
  error: "error",
};

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
