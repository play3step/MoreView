import styled from 'styled-components';
import { ReactComponent as Design } from '../../assets/interactive/design.svg';
import { ReactComponent as Text } from '../../assets/interactive/text.svg';
import { ReactComponent as Element } from '../../assets/interactive/element.svg';

// 타입에 따른 아이콘 매핑
const ICONS = {
  Design,
  Text,
  Element,
};

function DesignBtn({ onClick, type }) {
  const Icon = ICONS[type]; // 타입에 해당하는 아이콘 컴포넌트
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
