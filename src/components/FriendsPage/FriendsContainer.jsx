import styled from 'styled-components';
import FriendBox from './FriendItem';

function FriendsContainer({ friendList }) {
  return (
    <RequestContainer>
      <p>Friends</p>
      {friendList.map((data, index) => (
        <FriendBox data={data} key={index} />
      ))}
    </RequestContainer>
  );
}

export default FriendsContainer;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.22vh;
`;
