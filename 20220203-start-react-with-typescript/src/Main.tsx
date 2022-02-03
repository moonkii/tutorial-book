import styled from 'styled-components';
import Cards from './components/Cards';

const Greeting = styled.p`
  font-size: 16px;
  text-align: center;
  i {
    font-size: .5em;
  }
`;

export default function Main() {
  return (
    <Greeting>
      Hello, world
      <i>!</i>
      <Cards />
    </Greeting>
  );
}
