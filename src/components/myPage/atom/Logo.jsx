import { ReactComponent as MoreView } from '../../../assets/myPage/logo.svg';

function Logo({ width, height }) {
  return (
    <MoreView
      width={width ?? '13.229166666666666vw'}
      height={height ?? '15.74074074074074vh'}
    />
  );
}

export default Logo;
