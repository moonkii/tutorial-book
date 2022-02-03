import { RecoilRoot } from 'recoil';

import { createGlobalStyle } from 'styled-components';

import Main from './Main';

import reset from './styles/reset';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${reset}
`;

export default function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Main />
    </RecoilRoot>
  );
}
