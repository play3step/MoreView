import { useSetRecoilState } from 'recoil';
import setInteractive from '../../store/recoil';

import Design from '../../assets/design.png';

function DesignBtn() {
  const updateInteractive = useSetRecoilState(setInteractive);
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
      onClick={() => {
        updateInteractive(1);
      }}
    >
      <img
        src={Design}
        alt="Design"
        style={{
          width: '5.625vw',
          height: '8vh',
        }}
      />
    </button>
  );
}

export default DesignBtn;
