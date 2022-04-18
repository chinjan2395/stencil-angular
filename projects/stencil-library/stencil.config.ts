import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import {ValueAccessorConfig} from '@stencil/angular-output-target/dist/types';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'example-stencil-lib',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'example-stencil-lib',
      directivesProxyFile: '../../projects/component-library/src/lib/stencil-generated/components.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    })
  ],
};
