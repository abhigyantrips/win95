import { type Registry } from 'shadcn/schema';

export const components: Registry['items'] = [
  {
    name: 'webamp-player',
    type: 'registry:component',
    description: 'A Winamp music player component using Webamp',
    dependencies: ['webamp'],
    files: [
      {
        path: 'components/webamp-player.tsx',
        type: 'registry:component',
      },
    ],
  },
];
