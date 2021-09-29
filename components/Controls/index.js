import svgCamera from '../../assets';

const usb = unselectBase;

let styleBar = `
    position : absolute;
    bottom: 0px;
    width: 100%;
    display:flex;
    line-height: 32px;
    justify-content: space-around;
    border-top: 1px solid #00739b;
    line-height: 32px;
    padding-top: 10px;  
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
