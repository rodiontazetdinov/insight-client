import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/insight-client/',
  plugins: [
    react(),
    tsconfigPaths(),
    basicSsl(),
    nodePolyfills(),
  ],
  publicDir: './public',
  server: {
    // Uncomment this line if you want to expose your dev server and access it from the devices
    // in the same network.
    host: true,
  },
});

