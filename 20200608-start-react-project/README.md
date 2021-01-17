# 리엑트 프로젝트 세팅하기

## 세팅 목록

- React
- Redux
- Babel
- ESLint
- Jest
- React Testing Library
- CodeceptJS
- webpack(+ HtmlWebpackPlugin)

## 프로젝트 생성 및 기본 세팅

```bash
mkdir react-sample

npm init -y
```

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

## React 설치

```bash
npm i react react-dom
```

### React 테스팅 모듈 설치

``` bash
npm i -D jest @types/jest @testing-library/jest-dom @testing-library/react
```

### jest.config.js 와 jest.setup.js 생성

Jest 에서 React Testing Library 를 사용하기 위해 설정 파일을 생성해준다.


## Redux 설치

```bash
npm i redux react-redux @reduxjs/toolkit
```

## CodeceptJS 설치

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

### CodeceptJS 세팅

`.gitignore` 에 `output/` 을 추가한다.

`tests` 폴더를 생성해서 관리하는 경우 `steps.d.ts` 파일과 `steps_file.js` 를 폴더 안으로 이동시킨다.

`tests` 폴더 안에 `.eslintrc.js` 파일을 생성해준다.

`jsconfig.json` 파일은 삭제한다.

CodeceptJS 설정파일인 `codecept.conf.js` 에서 경로 등을 설정한다.

> CodeceptJS 를 실행할 때에는 반드시 `npm start` 를 한 상태에서 해야한다.

## webpack 설치

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) 은 번들 파일이 삽입된 html을 dist/index.html
에 생성해주는 플러그인이다.

```bash
npm i -D webpack webpack-cli webpack-dev-server

npm i -D html-webpack-plugin

npm i -D style-loader css-loader
```

### package.json 의 scripts 에서 start 와 build 설정

프로젝트를 webpack-dev-server 로 실행 시키고, webpack 으로 번들링하는 빌드를 위한 작업이다.

### webpack.config.js 생성

기본 번들링 옵션과 모듈과 플러그인을 추가해주는 설정 파일이다.

## 그 외 기타 모듈들 설치

### Babel 설치

```bash
npm i -D babel-loader @babel/core @babel/preset-react @babel/preset-env babel-jest
```

### webpack.config.js 의 rules 에 Babel 추가

Babel 을 사용하기 위해서는 webpack 에 babel-loader 모듈을 추가해줘야 한다.

### babel.config.js 생성

Babel 로 React 를 컴파일 하기위해서 옵션을 지정해줘야 한다.

### Emotion

React 와 Emotion 을 함께 사용하는 경우 `@emotion/react` 를 설치해줘야 한다.

> Emotion 11 부터 `@emotion/core` 가 `@emotion/react` 로 변경되었다.

```bash
npm i @emotion/react @emotion/styled
```
