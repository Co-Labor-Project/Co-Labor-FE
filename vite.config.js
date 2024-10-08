// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/auth': {
//         target: `${import.meta.env.VITE_SERVER_URL}:8080`,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/auth/, ''),
//       },
//       '/api': {
//         target: `${import.meta.env.VITE_SERVER_URL}:8080`,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // mode에 맞는 .env 파일 로드
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/auth': {
          target: `${env.VITE_SERVER_URL}:8080`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/auth/, ''),
        },
        '/api': {
          target: `${env.VITE_SERVER_URL}:8080`, // 환경 변수 사용
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
