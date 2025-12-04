import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  devIndicators: false,
  outputFileTracingIncludes: {
    '/*': ['./registry/**/*'],
  },
  reactStrictMode: true,
};

export default withMDX(config);
