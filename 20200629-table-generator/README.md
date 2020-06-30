# 구글 시트로 간단하게 HTML 테이블 만들기

## 사용 기술

- 구글 스프레드 시트
- axios
- [node-html-parser](https://github.com/taoqf/node-html-parser)
- [sanitize-html](https://github.com/apostrophecms/sanitize-html)

## 구글 스프레드 시트로 테이블 만들기

1. 구글 스프레드 시트 생성
2. 시트에 원하는 테이블 생성(시트당 하나의 테이블)
3. 파일 > 웹에 게시 > 시트 별 웹페이지 로 게시

## 프로젝트 세팅

```bash
npm init -y

npm i axios node-html-parser sanitize-html
```

## 테이블 HTML 추출하기

- [table-generator.js](https://github.com/moonkii/tutorial-book/blob/master/20200629-table-generator/table-generator.js)

`<table>`을 포함한 내부 태그의 속성을 모두 제거 하고 `<thead>`를 제거한 HTML 코드를 추출

```bash
node table-generator.js
```
