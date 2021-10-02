import Scanner from '../components/Scanner/index.js';

const codeHandler = (function () {
  function getCodeFromResults(results) {
    let values = {};
    let scancode = null;
    let occurence = 0;

    for (let result of results) {
      values[result.code] ? values[result.code]++ : (values[result.code] = 1);
    }

    for (let code of Object.keys(values)) {
      if (values[code] >= occurence) {
        occurence = values[code];
        scancode = code;
      }
    }

    Scanner.updateUIByCode(scancode);
    Scanner.playBeep();
  }

  return {
    getCodeFromResults,
  };
})();

export default codeHandler;
