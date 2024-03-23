import styled from 'styled-components';
import EditHeader from '../components/EditPage/EditHeader';

function EditPage() {
  return (
    <EditContainer>
      <EditHeader />
    </EditContainer>
  );
}

export default EditPage;

const EditContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
