# Facebook Messenger API (챗봇 만들기)

## 페이스북 페이지 및 앱 만들기

1. 페이스북 페이지 생성 후 페이지 관리화면에서  
`버튼추가 > 연락하기 > 메시지 보내기` 로 메신저 오픈  

2. 앱 생성 및 페이지 연결: facebook for developers 에서  
`내앱 > 앱만들기 > 제품 추가 - Messenger 설정 > 페이지 추가 또는 삭제 > 토큰 생성`

3. Webhooks URL 추가:  
Messenger 설정 에서  
`콜백 URL 추가 > 콜백 URL에 ngrok를 통해 생성한 주소 작성(https://~/webhook) > 확인 토큰에 아무 토큰으로 사용할 적당한 텍스트 작성`

4. Webhooks 필드 추가
Messenger 설정의 Webhooks 에서
`받아보기 추가 > 받아보기 필드 선택(messages, messaging_postbacks 등) > 저장`


## API 서버 만들기

### 프로젝트 준비(express, ngrok 사용)

```shell script
# ngrok 설치
brew cask install ngrok

# 프로젝트 생성
mkdir PROJECT_NAME

cd PROJECT_NAME

npm init -y

npm install express body-parser request
```

### 서버 실행 및 콜백 URL 주소 얻기

`app.js`

```shell script
npm start

ngrok http 3000
```

# 참고 링크

 - [Facebook for Developers](https://developers.facebook.com/docs/messenger-platform)
 - [Express.js](https://expressjs.com/en/starter/installing.html)
 - [ngrok](https://ngrok.com/docs)
