import { useSetRecoilState } from 'recoil';
import setInteractive from '../../store/recoil';

import Text from '../../assets/text.png';

function TextBtn() {
  const updateInteractive = useSetRecoilState(setInteractive);

  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
      onClick={() => {
        updateInteractive(3);
      }}
    >
      <img
        src={Text}
        alt="Text"
        style={{
          width: '5.625vw',
          height: '8vh',
        }}
      />
    </button>
  );
}

export default TextBtn;
