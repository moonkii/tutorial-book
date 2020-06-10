const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const { log: print } = console;

const app = express();

const PORT = 3000;

const FB_TOKEN = '페이지 엑세스 토큰';
const MY_TOKEN = '확인 토큰 값';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// webhook URL 인증
app.get('/webhook', (req, res) => {
  /*
  * mode: 메시지 인지 확인 하기 위해 "subscribe" 라고 고정된 값
  * verify_token: Webhook 설정에서 직접 입력한 확인 토큰 값
  * challenge: Facebook 에서 생성한 참여 토큰 값(response 로 다시 보내야 함)
  * */
  const {
    'hub.mode': mode,
    'hub.verify_token': verify_token,
    'hub.challenge': challenge,
  } = req.query;

  if (mode !== 'subscribe' || verify_token !== MY_TOKEN) {
    res.status(403).send();
    return;
  }

  // Webhook 인증 후 200 응답과 함께 challenge 값을 보내야 함
  res.status(200).send(challenge);
});

// Webhook 으로 메시지 전달 받기
app.post('/webhook', (req, res) => {
  /*
  * object: Webhook 이벤트가 페이스북 페이지에서 왔는 지 확인 해주는 값
  * entry: 메신저로 받은 메시지 데이터
  * */
  const { object, entry } = req.body;

  if (object !== 'page') {
    res.status(403).send();
    return;
  }

  if (!entry.length) {
    res.status(404).send();
    return;
  }


  entry.forEach(item => {
    /*
    * senderPSID: 보낸 사람을 식별하는 ID 값
    * message: 누군가 보낸 메시지 Object (mid 와 text로 구성)
    * postback: 템플릿 이벤트 결과를 받을 때만 message 대신 전송 받는 Object
    */
    const {
      sender: { id: senderPSID },
      message,
      postback,
    } = item.messaging[0]; //하나의 이벤트 씩만 발생 하기 때문에 인덱스를 0으로 잡아준다.

    if (message) {
      handleMessage(senderPSID, message);
    }

    if (postback) {
      handlePostback(senderPSID, message);
    }
  });

  // 200 OK 응답(필수)
  res.status(200).send('EVENT_RECEIVED');
});

// 텍스트 메시지 응답을 처리하는 함수
function handleMessage(senderPSID, message) {
  /*
  * mid: 누군가 보낸 텍스트 메시지의 ID 값 (메시지 ID 도 포함 한다.)
  * text: 누군가 보낸 텍스트 메시지
  * */
  const { mid, text } = message;

  // 단순 텍스트 응답 예시(빠른 답장과 함께)
  const responseWithText = {
    text: `${text} 라고 보내신게 맞나요?`,
    quick_replies: [
      {
        content_type: 'text',
        title: 'YES',
        payload: 'yes',
      },
      {
        content_type: 'text',
        title: 'NO',
        payload: 'no',
      },
    ],
  };

  // template 응답 예시
  const responseWithTemplate = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: '버튼을 눌러 주세요',
        buttons: [
          {
            type: 'postback',
            title: 'Postback Button',
            payload: 'postback buttob clicked!',
          },
        ],
      },
    },
  };

  callSendAPI(senderPSID, responseWithText);
}

// postback(템플릿 이벤트에 대한 결과)을 처리하는 함수
function handlePostback(senderPSID, receivedPostBack) {
  /* title: 버튼에 적힌 텍스트
  *  payload: '템플릿 응답시 보낸 payload'
  * */
  const { title, payload } = receivedPostBack;

  const responseWithText = { text: title + '버튼을 누른 결과 입니다.' };

  callSendAPI(senderPSID, responseWithText);
}

// 페이스북 메신저에 HTTP 요청 보내는 함수
function callSendAPI(senderPSID, response) {
  // 페이스북 메신저로 보낼 답장 메시지
  const requestBody = {
    recipient: {
      id: senderPSID,
    },
    messaging_type: 'RESPONSE',
    message: response,
  };

  request({
    'uri': 'https://graph.facebook.com/v6.0/me/messages',
    'qs': { 'access_token': FB_TOKEN },
    'method': 'POST',
    'json': requestBody,
  }, (error, res, body) => {
    if (error) {
      print(error);
    }

    print('message sent!');
  });
}

app.listen(PORT, () => {
  print(`Example app listening on port ${PORT}!`);
});
