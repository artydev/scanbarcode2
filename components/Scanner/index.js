import SetupControls from '../Controls';
import Video from '../Video';

class _Scanner {
  constructor() {
    this.isScanning = false;
  }

  startVideo = function () {
    if (!this.isScanning) {
      this.isScanning = true;
      Video.launchCamera();
    }
  };

  showHistory = function () {};

  startApp = function () {
    sb(header);
    h2('CodeBarre Scanner');
    unselectBase();
    selectBase(scanner);
    SetupControls(this);
    unselectBase();
  };
}

const Scanner = new _Scanner();
export default Scanner;
