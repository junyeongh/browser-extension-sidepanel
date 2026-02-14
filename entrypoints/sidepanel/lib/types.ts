export type Service = {
  enabled: boolean;
  path: string;
};

export type Services = Record<string, Record<string, Service>>;
