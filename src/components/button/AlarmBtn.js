import Alarm from '../../assets/alarm.png';

function AlarmBtn() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Alarm}
        alt="Alarm"
        style={{
          width: '2.6vw',
          height: '5.3vh',
        }}
      />
    </button>
  );
}

export default AlarmBtn;
