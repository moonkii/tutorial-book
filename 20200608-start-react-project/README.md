# 리엑트 프로젝트 세팅하기

## 세팅 목록

- webpack(+ HtmlWebpackPlugin)
- React
- Redux
- Babel
- ESLint
- Emotion
- Jest
- React Testing Library

## 프로젝트 생성

```bash
mkdir react-sample

npm init -y
```

## webpack 설치

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) 은 번들 파일이 삽입된 html을 dist/index.html
에 생성해주는 플러그인이다.

```bash
npm i -D webpack webpack-cli webpack-dev-server

npm i -D html-webpack-plugin
```

### package.json 의 scripts 에서 start 와 build 설정

프로젝트를 webpack-dev-server 로 실행 시키고, webpack 으로 번들링하는 빌드를 위한 작업이다.

### webpack.config.js 생성

기본 번들링 옵션과 모듈과 플러그인을 추가해주는 설정 파일이다.

## React 설치

```bash
npm i react react-dom
```

## Redux 설치

```bash
npm i redux react-redux

npm i -D @reduxjs/toolkit
```

## 그 외 기타 모듈들 설치

### Babel 설치

```bash
npm i -D babel-loader @babel/core @babel/preset-react @babel/preset-env babel-jest
```

### webpack.config.js 의 rules 에 Babel 추가

babel을 사용하기 위해서는 webpack 에 babel-loader 모듈을 추가해줘야 한다.

### babel.config.js 생성

Babel로 React를 컴파일 하기위해서 옵션을 지정해줘야 한다.

### 린터 설치

`.eslintrc.js` 에서 추가로 rules 를 추가 해준다.

```bash
npm i -D eslint

npx eslint --init
# > To check syntax, find problem, and enforce code style
# > JavaScript modules (import/export)
# > React
# > Browser
# > Use a popular style guide
# > Airbnb
# > JavaScript
```

### Emotion

React 와 Emotion 을 함께 사용하는 경우 `@emotion/core` 를 설치해줘야 한다.

```bash
npm i @emotion/core @emotion/styled

# ESLint 를 사용하는 경우 설(.eslintrc.js 에 plugins 에 emotion 추가해줘야 함)
npm i -D eslint-plugin-emotion
```

### 테스팅 모듈 설치

``` bash
npm i -D jest @types/jest @testing-library/jest-dom @testing-library/react
```

### jest.config.js 와 jest.setup.js 생성

Jest 에서 React Testing Library 를 사용하기 위해 설정 파일을 생성해준다.
