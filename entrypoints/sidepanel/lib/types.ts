export type Service = {
  enabled: boolean;
  logo: string;
  path: string;
};

export type Services = Record<string, Record<string, Service>>;
