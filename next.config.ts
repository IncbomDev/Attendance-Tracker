import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
    dest: 'public',
})

const nextConfig: NextConfig = withPWA({
  /* config options here */
});

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
