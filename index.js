module.exports = `
  (function() {
    function setDarkMode(v) {
      window.__darkMode = v
      localStorage.setItem('dark', v ? 'yes' : 'no');
      document.body.className = v ? 'dark' : 'light';
    }
    var q = window.matchMedia('(prefers-color-scheme: dark)');
    q.addListener(function(e) { setDarkMode(e.matches); });
    var darkLS
    try { darkLS = localStorage.getItem('dark'); }
    catch (err) { }
    setDarkMode(darkLS ? darkLS === 'yes' : q.matches);
    window.__toggleDarkMode = function() {
      setDarkMode(!window.__darkMode);
    }
  })();
`;
