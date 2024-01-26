import { atom } from 'recoil';

const interactiveState = atom({
  key: 'interactiveState',
  default: 0,
});

export default interactiveState;
