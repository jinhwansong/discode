// vite.config.ts
import { defineConfig } from "file:///D:/code/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///D:/code/frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
import envCompatible from "file:///D:/code/frontend/node_modules/vite-plugin-env-compatible/dist/index.mjs";
import tsconfigPaths from "file:///D:/code/frontend/node_modules/vite-tsconfig-paths/dist/index.mjs";
import checker from "file:///D:/code/frontend/node_modules/vite-plugin-checker/dist/esm/main.js";
import svgr from "file:///D:/code/frontend/node_modules/vite-plugin-svgr/dist/index.js";
import viteImagemin from "file:///D:/code/frontend/node_modules/vite-plugin-imagemin/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\code\\frontend";
var vite_config_default = defineConfig({
  server: {
    // 기본포트 설정
    port: 3e3,
    // 서버시작시 자동 브라우저 오픈
    open: true
  },
  build: {
    // rollupoptions에서 각기 다른 폴더에 이미지 css js 들어가도록 설정
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js"
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  plugins: [
    // svg를 컴포넌트 처럼 사용하게 해줌
    svgr(),
    react(),
    // svg이외의 이미지 파일 최적화
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    // 환경변수를 import.meta.env 에서 process.env로 바꿔줌
    envCompatible({ prefix: "REACT_APP" }),
    // tsconfig.json에 정의된 paths 매핑사용
    tsconfigPaths(),
    checker({
      // 타입스크립트 타입 검사
      typescript: true,
      // eslint 검사
      eslint: { lintCommand: "eslint ./src --ext .ts,.tsx" }
    })
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") },
      { find: "@pages", replacement: path.resolve(__vite_injected_original_dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__vite_injected_original_dirname, "src/components")
      },
      { find: "@assets", replacement: path.resolve(__vite_injected_original_dirname, "src/assets") },
      { find: "@hooks", replacement: path.resolve(__vite_injected_original_dirname, "src/hooks") },
      { find: "@stores", replacement: path.resolve(__vite_injected_original_dirname, "src/stores") },
      { find: "@styles", replacement: path.resolve(__vite_injected_original_dirname, "src/styles") },
      { find: "@types", replacement: path.resolve(__vite_injected_original_dirname, "src/types") },
      { find: "@utils", replacement: path.resolve(__vite_injected_original_dirname, "src/utils") }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBlbnZDb21wYXRpYmxlIGZyb20gJ3ZpdGUtcGx1Z2luLWVudi1jb21wYXRpYmxlJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IGNoZWNrZXIgZnJvbSAndml0ZS1wbHVnaW4tY2hlY2tlcic7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgLy8gXHVBRTMwXHVCQ0Y4XHVEM0VDXHVEMkI4IFx1QzEyNFx1QzgxNVxuICAgIHBvcnQ6IDMwMDAsXG4gICAgLy8gXHVDMTFDXHVCQzg0XHVDMkRDXHVDNzkxXHVDMkRDIFx1Qzc5MFx1QjNEOSBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAgXHVDNjI0XHVENTA4XG4gICAgb3BlbjogdHJ1ZSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyByb2xsdXBvcHRpb25zXHVDNUQwXHVDMTFDIFx1QUMwMVx1QUUzMCBcdUIyRTRcdUI5NzggXHVEM0Y0XHVCMzU0XHVDNUQwIFx1Qzc3NFx1QkJGOFx1QzlDMCBjc3MganMgXHVCNEU0XHVDNUI0XHVBQzAwXHVCM0M0XHVCODVEIFx1QzEyNFx1QzgxNVxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGxldCBleHRUeXBlID0gYXNzZXRJbmZvLm5hbWU/LnNwbGl0KCcuJykuYXQoMSk7XG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dFR5cGUgYXMgc3RyaW5nKSkge1xuICAgICAgICAgICAgZXh0VHlwZSA9ICdpbWcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7ZXh0VHlwZX0vW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgIH0sXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLy8gc3ZnXHVCOTdDIFx1Q0VGNFx1RDNFQ1x1QjEwQ1x1RDJCOCBcdUNDOThcdUI3RkMgXHVDMEFDXHVDNkE5XHVENTU4XHVBQzhDIFx1RDU3NFx1QzkwQ1xuICAgIHN2Z3IoKSxcbiAgICByZWFjdCgpLFxuICAgIC8vIHN2Z1x1Qzc3NFx1QzY3OFx1Qzc1OCBcdUM3NzRcdUJCRjhcdUM5QzAgXHVEMzBDXHVDNzdDIFx1Q0Q1Q1x1QzgwMVx1RDY1NFxuICAgIHZpdGVJbWFnZW1pbih7XG4gICAgICBnaWZzaWNsZToge1xuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgb3B0aXBuZzoge1xuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgIH0sXG4gICAgICBtb3pqcGVnOiB7XG4gICAgICAgIHF1YWxpdHk6IDIwLFxuICAgICAgfSxcbiAgICAgIHBuZ3F1YW50OiB7XG4gICAgICAgIHF1YWxpdHk6IFswLjgsIDAuOV0sXG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgfSxcbiAgICAgIHN2Z286IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVWaWV3Qm94JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVFbXB0eUF0dHJzJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBcdUQ2NThcdUFDQkRcdUJDQzBcdUMyMThcdUI5N0MgaW1wb3J0Lm1ldGEuZW52IFx1QzVEMFx1QzExQyBwcm9jZXNzLmVudlx1Qjg1QyBcdUJDMTRcdUFGRDRcdUM5MENcbiAgICBlbnZDb21wYXRpYmxlKHsgcHJlZml4OiAnUkVBQ1RfQVBQJyB9KSxcbiAgICAvLyB0c2NvbmZpZy5qc29uXHVDNUQwIFx1QzgxNVx1Qzc1OFx1QjQxQyBwYXRocyBcdUI5RTRcdUQ1NTFcdUMwQUNcdUM2QTlcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG5cbiAgICBjaGVja2VyKHtcbiAgICAgIC8vIFx1RDBDMFx1Qzc4NVx1QzJBNFx1RDA2Q1x1QjlCRFx1RDJCOCBcdUQwQzBcdUM3ODUgXHVBQzgwXHVDMEFDXG4gICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgLy8gZXNsaW50IFx1QUM4MFx1QzBBQ1xuICAgICAgZXNsaW50OiB7IGxpbnRDb21tYW5kOiAnZXNsaW50IC4vc3JjIC0tZXh0IC50cywudHN4JyB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHsgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH0sXG4gICAgICB7IGZpbmQ6ICdAcGFnZXMnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcycpIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdAY29tcG9uZW50cycsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgIH0sXG4gICAgICB7IGZpbmQ6ICdAYXNzZXRzJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvYXNzZXRzJykgfSxcbiAgICAgIHsgZmluZDogJ0Bob29rcycsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2hvb2tzJykgfSxcbiAgICAgIHsgZmluZDogJ0BzdG9yZXMnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zdG9yZXMnKSB9LFxuICAgICAgeyBmaW5kOiAnQHN0eWxlcycsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3N0eWxlcycpIH0sXG4gICAgICB7IGZpbmQ6ICdAdHlwZXMnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90eXBlcycpIH0sXG4gICAgICB7IGZpbmQ6ICdAdXRpbHMnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy91dGlscycpIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3TyxTQUFTLG9CQUFvQjtBQUNyUSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFQakIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFVBQVUsTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDN0MsY0FBSSxrQ0FBa0MsS0FBSyxPQUFpQixHQUFHO0FBQzdELHNCQUFVO0FBQUEsVUFDWjtBQUNBLGlCQUFPLEdBQUcsT0FBTztBQUFBLFFBQ25CO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQSxJQUVQLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQTtBQUFBLElBRU4sYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELGNBQWMsRUFBRSxRQUFRLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFFckMsY0FBYztBQUFBLElBRWQsUUFBUTtBQUFBO0FBQUEsTUFFTixZQUFZO0FBQUE7QUFBQSxNQUVaLFFBQVEsRUFBRSxhQUFhLDhCQUE4QjtBQUFBLElBQ3ZELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sS0FBSyxhQUFhLEtBQUssUUFBUSxrQ0FBVyxLQUFLLEVBQUU7QUFBQSxNQUN6RCxFQUFFLE1BQU0sVUFBVSxhQUFhLEtBQUssUUFBUSxrQ0FBVyxXQUFXLEVBQUU7QUFBQSxNQUNwRTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDdkQ7QUFBQSxNQUNBLEVBQUUsTUFBTSxXQUFXLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFlBQVksRUFBRTtBQUFBLE1BQ3RFLEVBQUUsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFdBQVcsRUFBRTtBQUFBLE1BQ3BFLEVBQUUsTUFBTSxXQUFXLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFlBQVksRUFBRTtBQUFBLE1BQ3RFLEVBQUUsTUFBTSxXQUFXLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFlBQVksRUFBRTtBQUFBLE1BQ3RFLEVBQUUsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFdBQVcsRUFBRTtBQUFBLE1BQ3BFLEVBQUUsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFdBQVcsRUFBRTtBQUFBLElBQ3RFO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
