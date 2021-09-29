import Quagga from 'quagga';
import Scanner from '../Scanner';

const scannerDiv = elementById('scanner');

const Video = (function () {
  function onInitSuccess() {
    const controls = Scanner.controls;
    controls.btnCamera.style.stroke = 'white';
    Quagga.start();
  }

  function onDetected(r) {
    alert(r.codeResult.code);
  }

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
          numOfWorkers: 1,
          locate: true,
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
    sb(scannerDiv);
    sb(div('', { id: 'video' }));
    _launchCamera();
    unselectBase();
    unselectBase();
  }

  return {
    launchCamera,
  };
})();

export default Video;
