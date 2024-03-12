import styled from 'styled-components';
import { ReactComponent as Design } from '../../assets/interactive/design.svg';
import { ReactComponent as Text } from '../../assets/interactive/text.svg';
import { ReactComponent as Element } from '../../assets/interactive/element.svg';
import { ReactComponent as Search3d } from '../../assets/icon/3d.svg';
import { ReactComponent as produce3d } from '../../assets/interactive/produce3d.svg';

const ICONS = {
  Design,
  Text,
  Element,
  Search3d,
  produce3d,
};

function DesignBtn({ onClick, type }) {
  const Icon = ICONS[type];
  return (
    <DesignButton onClick={onClick}>
      {Icon && <Icon alt="item" width="4.21875vw" height="7.5vh" />}
    </DesignButton>
  );
}
export default DesignBtn;

const DesignButton = styled.button`
  background-color: transparent;
  border: none;
`;
