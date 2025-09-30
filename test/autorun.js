// test/autorun.js
(function () {
  // En UI_ONCE queremos que arranque solo 1 vez y deje la página con el resultado.
  var once =
    typeof window !== "undefined" &&
    window.__karma__ &&
    ((window.__karma__.config && window.__karma__.config.args) || []).indexOf(
      "UI_ONCE"
    ) !== -1;
  if (
    once &&
    window.__karma__ &&
    typeof window.__karma__.start === "function"
  ) {
    // Espera a que Jasmine HTML reporter inserte el DOM y dispara la corrida
    setTimeout(function () {
      try {
        window.__karma__.start();
      } catch (e) {
        /* noop */
      }
    }, 0);
  }
})();
