module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],

    files: [{ pattern: "src/**/*.spec.{js,jsx}", watched: false }],
    exclude: ["src/**/*.test.*"],

    preprocessors: {
      "src/**/*.spec.{js,jsx}": ["esbuild"],
      "src/**/*.{js,jsx}": ["esbuild", "coverage"],
    },

    esbuild: {
      target: "es2020",
      sourcemap: "inline",
      jsx: "automatic",
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
        ".png": "dataurl",
        ".jpg": "dataurl",
        ".jpeg": "dataurl",
        ".webp": "dataurl",
        ".svg": "dataurl",
        ".css": "css",
      },
    },

    // 👇 Reporter HTML para ver el resultado en http://localhost:9876/
    reporters: ["kjhtml", "coverage"],

    coverageReporter: {
      dir: "coverage",
      reporters: [{ type: "html" }, { type: "text-summary" }],
      includeAllSources: true,
      instrumenterOptions: { istanbul: { noCompact: true } },
    },

    browsers: ["Opera"], // o 'ChromeHeadless' para chrome
    singleRun: false, // no cerrar al terminar
    autoWatch: false, // no re-ejecutar al guardar
    client: { clearContext: false }, // mantiene el HTML del reporter visible
    port: 9876,
    browserNoActivityTimeout: 60000,
  });
};
