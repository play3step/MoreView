import { useSetRecoilState } from 'recoil';
import setInteractive from '../../store/recoil';

import Element from '../../assets/element.png';

function ElementBtn() {
  const updateInteractive = useSetRecoilState(setInteractive);
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
      onClick={() => {
        updateInteractive(2);
      }}
    >
      <img
        src={Element}
        alt="Element"
        style={{
          width: '5.625vw',
          height: '8vh',
        }}
      />
    </button>
  );
}

export default ElementBtn;
