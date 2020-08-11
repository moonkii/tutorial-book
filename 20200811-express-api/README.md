# Express API 서버 프로젝트 세팅하기

## 사용기술

- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- [Body Parser](https://expressjs.com/en/resources/middleware/body-parser.html)
- [SuperTest](https://github.com/visionmedia/supertest)
- ESLint
- Jest

## 프로젝트 생성

```bash
npm init -y

npm i express nodemon cors body-parser

npm i -D jest @types/jest supertest @types/supertest eslint

npx eslint --init

? How would you like to use ESLint?
> To Check syntax, find problems, and enforce code style

? What type of module does your project use?
> CommonJS (require/exports)

? Which framework does your project use?
> None of these

? Does your project use Type Script?
> No

? Where does your code run?
v Node

? What format do you want your config file to be in?
> JavaScript
```

- `.eslintrc.js` 세팅하기
- `package.json` 세팅하기
- `index.js` 생성하기
- `app.test.js` 생성하기
- `app.js` 생성하기
