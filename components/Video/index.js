import Quagga from '../../_snowpack/pkg/quagga.js';
import Scanner from '../Scanner/index.js';
import codeHandler from '../../services/codehandler.js';
const scannerDiv = elementById('scanner');

let results = [];

const Video = (function () {
  function onInitSuccess() {
    const controls = Scanner.controls;
    controls.btnCamera.style.stroke = 'red';

    Quagga.start();
  }

  function onDetected(r) {
    results.push(r.codeResult);
    if (results.length > 10) {
      console.log(results);
      codeHandler.getCodeFromResults(results);
      results = [];
      Quagga.stop();
    }
    window.location.href = `https://si.dgccrf.rie.gouv.fr/codebarre/code/${r.codeResult.code}`;
  }

  Quagga.onProcessed(function (result) {});

  function _launchCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            multiple: false,
          },
          numOfWorkers: navigator.hardwareConcurrency,
          locate: false,

          area: {
            top: '40%',
            right: '40%',
            left: '40%',
            bottom: '40%',
          },

          decoder: {
            readers: ['ean_reader'],
          },
        },
        (err) => {
          if (err) {
            setVideoError(true);
            return;
          }
          onInitSuccess();
        }
      );

      Quagga.onDetected(onDetected);
    }
  }

  function launchCamera() {
    Scanner.video = div('', { id: 'video' });
    sb(scannerDiv);
    sb(Scanner.video);
    _launchCamera();
    unselectBase();
    unselectBase();
  }

  return {
    launchCamera,
  };
})();

export default Video;
