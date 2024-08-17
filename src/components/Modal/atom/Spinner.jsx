import styled, { keyframes } from 'styled-components';

function Spinner({ type }) {
  return <SpinnerBox type={type} />;
}

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBox = styled.div`
  height: ${(prop) => (prop.type === 'small' ? '2vw' : '5vw')};
  width: ${(prop) => (prop.type === 'small' ? '2vw' : '5vw')};
  border: 1px solid #3563e9;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 2vw auto;
  animation: ${rotation} 1s linear infinite;
`;

export default Spinner;
