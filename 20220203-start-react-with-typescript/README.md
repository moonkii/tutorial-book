# 리엑트 프로젝트 세팅하기

## 세팅 목록

- ESLint
- React
- TypeScript
- Jest
- React Testing Library
- esbuild
- styled-component
- Recoil, Custom hook
- CodeceptJS

## 프로젝트 생성

```bash
mkdir react-project

npm init -y
```

## TypeScript 세팅

TypeScript 패키지를 설치하고, `tsconfig.json` 파일을 자동으로 생성

```bash
npm install --save-dev typescript

npx tsc --init
```

JSX 를 하용하기 위해 `tsconfig.json` 파일에 옵션 추가하고, `node_modules` 를 제외

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  },
  "exclude": [
    "node_modules"
  ]
}
```

TypeScript 컴파일을 통해 문법 오류를 확인하는 `check` 명령을 `package.json` 파일에 추가

```json
{
  "scripts": {
    "check": "tsc --noEmit"
  }
}
```

## ESLint 세팅

### ESLint 설치

```bash
npm i -D eslint

npx eslint --init
# > To check syntax, find problem, and enforce code style
# > JavaScript modules (import/export)
# > React
# > Yes(TypeScript)
# > Browser
# > Use a popular style guide
# > Airbnb
# > JavaScript
```

### 설정 파일 생성
`.eslintrc.js` 파일에 설정추가하고 `package.json` 파일에 `lint` 명령어 추가

### ignore 설정 파일 생성

`.eslintignore` 파일생성

```ignorelang
/node_modules/
/dist/
/.parcel-cache/
*.d.ts
```

## React 세팅

### React 설치

```bash
npm i react react-dom

npm install --save-dev @types/react @types/react-dom
```

### 리액트 기본 코드 생성

```bash
mkdir src

touch src/index.tsx
touch src/App.tsx
```

## Jest 세팅

### Jest 설치

``` bash
npm i -D jest ts-jest @types/jest jest-plugin-context

npm i -D @testing-library/jest-dom @testing-library/react

npm i -D @testing-library/react-hooks
```

### jest.config.js 생성

Jest 에서 React Testing Library 를 사용하기 위해 설정 파일을 생성

### ESLint 에 Jest 옵션 추가

`.eslintrc.js` 파일에 설정 추가

```js
module.exports = {
  env: {
    jest: true
  },
};
```

## esbuild 세팅

### esbuild 설치

```bash
npm install -D esbuild servor concurrently
```

### tsconfig.json 수정

```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

### react-shim.js 파일 작성

### package.json 파일에 명령어 추가

```json
{
  "scripts": {
    "start": "npm run build && concurrently 'npm:serve' 'npm:watch-js'",
    "serve": "servor dist index.html 8080 --reload",
    "build": "mkdir -p dist && cp index.html dist/ && npm run build-js",
    "build-js": "esbuild ./src --bundle --inject:./react-shim.js --outfile=dist/bundle.js",
    "watch-js": "npm run build-js -- --watch"
  }
}
```

### scripts/build.ts 파일생성

빌드를 위한 파일 생성하고, 빌드파일 구분을 위한 `ulid` 라이브러리 설치

```bash
npm i ulid
```

## styled-component 세팅

### styled-component 설치

```bash
npm install styled-components

npm install --save-dev @types/styled-components
```

## Recoil 세팅

### Recoil 설치

```bash
npm install recoil

npm install --save-dev @types/recoil
```

### RecoilRoot 설정

최상위 컴포넌트를 `RecoilRoot` 태그로 감싸줄 것

Custom Hook 과 함께 사용

## CodeceptJS 세팅

### CodeceptJS 설치

```bash
npx codeceptjs init

# > Where are your tests located? ./tests/**/*_test.js
# > What helpers do you want to use? Playwright
# > where should logs, screenshots, and reports to be stored? (./output) 
# > Do you want localization for tests? English (no localization)
# > [Playwright] Base url of site to be tested (http://localhost)
# > [Playwright] Show browser window n
# > [Playwright] Browser in which testing will be performed. Possible options: chromium, firefox or webkit (chromium)
# > Feature which is being tested (ex: account, login, etc)
# > Filename of a test (_test.js)
```

### CodeceptJS 파일 정리

1. `.gitignore` 에 `output/` 을 추가

1. `tests` 폴더를 생성해서 관리하는 경우 `steps.d.ts` 파일과 `steps_file.js` 를 폴더 안으로 이동시킴

1. `tests` 폴더 안에 `.eslintrc.js` 파일을 생성

1. `jsconfig.json` 파일은 삭제

1. CodeceptJS 설정파일인 `codecept.conf.js` 에서 경로 등을 설정

> CodeceptJS 를 실행할 때에는 반드시 `npm start` 를 한 상태에서 해야한다.

- 참고: https://github.com/ahastudio/CodingLife/tree/main/20211012/react
