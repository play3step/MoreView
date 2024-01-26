import Design from '../../assets/design.png';

function DesignBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
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
