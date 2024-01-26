import styled from 'styled-components';
import Alarm from '../../assets/alarm.png';

function AlarmBtn() {
  return (
    <AlarmButton>
      <AlarmImage src={Alarm} alt="Alarm" />
    </AlarmButton>
  );
}
export default AlarmBtn;

const AlarmButton = styled.button`
  background-color: transparent;
  border: none;
`;

const AlarmImage = styled.img`
  width: 2.6vw;
  height: 4.88vh;
`;
