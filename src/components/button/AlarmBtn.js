import styled from 'styled-components';
import { ReactComponent as Alarm } from '../../assets/alarm.svg';

function AlarmBtn() {
  return (
    <AlarmButton>
      <Alarm alt="Alarm" />
    </AlarmButton>
  );
}
export default AlarmBtn;

const AlarmButton = styled.button`
  background-color: transparent;
  border: none;
`;
