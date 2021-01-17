import styled from '@emotion/styled';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
});

const Title = styled.h1({
  fontSize: '1em',
  textAlign: 'center',
});

export default function Tutorial() {
  return (
    <Container>
      <Title>
        리엑트 프로젝트 세팅하기!
      </Title>
    </Container>
  );
}
