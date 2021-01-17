Feature('Initialize project');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('리엑트 프로젝트 세팅하기!')
});
