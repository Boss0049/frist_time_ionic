import { WebPlugin } from '@capacitor/core';
import { openMapPlugin } from './definitions';

export class openMapWeb extends WebPlugin implements openMapPlugin {
  constructor() {
    super({
      name: 'openMap',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async open(options: { longitude: number;latitude:number }): Promise<void> {
    console.log('ECHO', options);
  }
}

const openMap = new openMapWeb();

export { openMap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(openMap);
