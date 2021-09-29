import svgCamera from '../../assets';

const usb = unselectBase;

let styleBar = `
    position : absolute;
    bottom: 0px;
    width: 100%;
    display:flex;
    line-height: 32px;
    justify-content: space-around;
  
`;
const SetupControls = (scanner) => {
  sb(div('', { style: styleBar }));
  let scanBtn = div(svgCamera);
  usb();
  scanBtn.onclick = scanner.startVideo.bind(scanner);
  const btnCamera = scanBtn.childNodes[0];
  scanner.controls = { btnCamera };
};

export default SetupControls;
