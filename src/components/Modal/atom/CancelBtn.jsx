import { ReactComponent as Cancel } from '../../../assets/svgIcon/cancel.svg';

function CancelBtn({ CancelHandler }) {
  return (
    <Cancel
      width="2.1875vw"
      height="3.888888888888889vh"
      onClick={CancelHandler}
    />
  );
}

export default CancelBtn;
