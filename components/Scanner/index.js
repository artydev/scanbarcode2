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
    h2('Home');
    h2('CodeBarre Scanner');
    h2('Help');
    unselectBase();
    selectBase(scanner);
    SetupControls(this);
    unselectBase();
  };
}

const Scanner = new _Scanner();
export default Scanner;
