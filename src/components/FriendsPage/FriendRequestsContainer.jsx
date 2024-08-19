import styled from 'styled-components';
import FriendBox from './FriendItem';

function FriendRequestsContainer({ requests }) {
  console.log(requests);
  return (
    <RequestContainer>
      <p>Friend Requests</p>
      {requests.map((data, index) => (
        <FriendBox type="Request" data={data} key={index} />
      ))}
    </RequestContainer>
  );
}

export default FriendRequestsContainer;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.22vh;
`;
