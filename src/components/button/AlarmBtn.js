import styled from 'styled-components';
import { ReactComponent as Alarm } from '../../assets/icon/alarm.svg';

function AlarmBtn() {
  return (
    <AlarmButton>
      <Alarm alt="Alarm" width="2.60416vw" height="4.6296vh" />
    </AlarmButton>
  );
}
export default AlarmBtn;

const AlarmButton = styled.button`
  background-color: transparent;
  border: none;
`;
