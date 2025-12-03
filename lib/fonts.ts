import localFont from 'next/font/local';

export const w95Sans = localFont({
  src: [
    {
      path: '../public/fonts/w95font.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/w95font-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});
