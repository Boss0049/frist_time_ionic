declare module '@capacitor/core' {
  interface PluginRegistry {
    openMap: openMapPlugin;
  }
}

export interface openMapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  open(options: { longitude: number;latitude:number }): Promise<void>;
}
