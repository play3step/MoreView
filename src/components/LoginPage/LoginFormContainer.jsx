import styled from 'styled-components';
import SubmitBtn from './atom/SubmitBtn';

function LoginFormContainer({
  email,
  password,
  setEmail,
  setPassword,
  LoginHandle,
}) {
  return (
    <Container>
      <InputBox
        placeholder="이메일"
        type="id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputBox
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <SubmitBtn type="submit" onClick={LoginHandle} />
    </Container>
  );
}

export default LoginFormContainer;

const Container = styled.form`
  width: 308px;
  height: 221px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InputBox = styled.input`
  width: 308px;
  height: 48px;
  padding: 0 18px;
  border: 1px solid #6b7684;
  border-radius: 8px;
`;
