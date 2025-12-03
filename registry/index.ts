import { type Registry, RegistryItem, registryItemSchema } from 'shadcn/schema';
import { z } from 'zod/v3';

import { hooks } from './hooks/_registry';
import { lib } from './lib/_registry';
import { ui } from './ui/_registry';

const DEPRECATED_ITEMS: string[] = [];

// Shared between index and style for backward compatibility.
const WIN95_STYLE = {
  type: 'registry:style',
  dependencies: ['class-variance-authority', 'lucide-react'],
  devDependencies: ['tw-animate-css'],
  registryDependencies: ['utils'],
  cssVars: {},
  files: [],
};

export const registry = {
  name: 'win95/ui',
  homepage: 'https://win95.abhi.now',
  items: z.array(registryItemSchema).parse(
    [
      {
        name: 'index',
        ...WIN95_STYLE,
      },
      {
        name: 'style',
        ...WIN95_STYLE,
      },
      ...ui,
      ...lib,
      ...hooks,
    ].filter((item) => {
      return !DEPRECATED_ITEMS.includes(item.name);
    })
  ),
} satisfies Registry;
