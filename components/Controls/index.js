const svgCamera = `<svg id="svgcamera" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
const svgHistory = `<svg id="svghistory"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
const usb = unselectBase;

let styleBar = `
    position : absolute;
    bottom: 1px;
    width: 100%;
    display:flex;
    line-height: 40px;
    justify-content: space-around;
    background: deeppink;
`;
const SetupControls = (scanner) => {
  sb(div('', { style: styleBar }));
  sb(div('', 'width:236px;margin 0 auto;display:flex;padding-top:20px;'));
  let scanBtn = div(svgCamera);
  nbsp(32);
  let historyBtn = div(svgHistory);
  usb();
  scanBtn.onclick = scanner.startVideo.bind(scanner);
  historyBtn.onclick = scanner.showHistory.bind(scanner);
  const btnCamera = scanBtn.childNodes[0];
  const btnHistory = historyBtn.childNodes[0];
  usb();
  scanner.controls = { btnCamera, btnHistory };
};

export default SetupControls;
