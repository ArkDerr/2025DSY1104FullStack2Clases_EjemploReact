// karma.conf.js
let istanbul = null;
try {
  istanbul = require("esbuild-plugin-istanbul").default;
} catch (_) {}

module.exports = function (config) {
  const isCI = process.env.CI === "true";
  const uiOnce = process.env.UI_ONCE === "true";

  // En local:
  // - test:ui       -> autoWatch ON (watch)
  // - test:ui:once  -> autoWatch OFF, singleRun OFF, pero autorun.js dispara la corrida
  const autoWatch = isCI ? false : !uiOnce;
  const singleRun = isCI ? true : false;

  config.set({
    basePath: "",

    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-jasmine-html-reporter",
      "karma-spec-reporter",
      "karma-coverage",
      "karma-esbuild",
    ],

    frameworks: ["jasmine"],

    // Excluye cosas que pueden disparar re-runs inútiles
    exclude: ["coverage/**", "**/*.map"],

    // 👇 Orden importa: primero setup, luego autorun (ver test/autorun.js), luego tests
    files: [
      { pattern: "test/setup.jasmine.ts", watched: false },
      //{ pattern: "test/autorun.js", watched: false }, // fuerza corrida en UI_ONCE
      { pattern: "test/sanity.test.ts", watched: false },
      { pattern: "src/pages/Home.test.tsx", watched: false },
      // Si luego agregas más suites, añade líneas explícitas o un glob *.test.*
    ],

    preprocessors: {
      "test/setup.jasmine.ts": ["esbuild"],
      "test/autorun.js": ["esbuild"],
      "test/sanity.test.ts": ["esbuild"],
      "src/pages/Home.test.tsx": ["esbuild"],
    },

    esbuild: {
      jsx: "automatic",
      sourcemap: "inline",
      target: "es2020",
      format: "iife",
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
        ".ts": "ts",
        ".tsx": "tsx",
        ".css": "file",
        ".jpg": "dataurl",
        ".jpeg": "dataurl",
        ".png": "dataurl",
        ".webp": "dataurl",
        ".svg": "dataurl",
      },
      define: { "process.env.NODE_ENV": '"test"' },
      plugins: istanbul
        ? [
            istanbul({
              include: ["src/**/*.{js,jsx,ts,tsx}"],
              exclude: ["**/*.test.{js,jsx,ts,tsx}"],
            }),
          ]
        : [],
    },

    reporters: ["kjhtml", "spec", "coverage"],
    coverageReporter: {
      dir: "coverage",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },

    browsers: isCI ? ["ChromeHeadlessCI"] : ["Chrome"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu"],
      },
    },

    client: {
      clearContext: false, // deja visible la UI (estilo Angular)
    },

    autoWatch,
    singleRun,
    restartOnFileChange: !isCI && !uiOnce,
    //port: 9877,
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
