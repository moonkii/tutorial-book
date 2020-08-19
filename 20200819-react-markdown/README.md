# 리엑트에서 마크다운으로 페이지 보여주기

## 사용기술
- React
- [React-Markdown](https://github.com/rexxars/react-markdown#readme)

## React-Markdown 설치
```bash
npm i react-markdown
```

## 예제 코드

### 마크다운 문서

```javascript
const text = `
# 마크다운 예시 문서

리엑트에서 마크다운으로 페이지 보여주기
`;

export default text;
```

### 리엑트에서 마크다운 사용법

```jsx
import React from 'react';

import ReactMarkdown from 'react-markdown';

import text from './text';

export default function MarkdownExample() {
  return (
    <>
      <ReactMarkdown source={text} />
    </>
  );
}
``` 
