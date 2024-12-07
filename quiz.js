const quiz = [
  {
    question: '第一問：ワンピースの主人公は誰？',
    answers: [
      'ルフィ',
      'シャンクス',
      'ウソップ',
      '黒ひげ'
    ],
    correct: 'ルフィ'
  }, {
    question: '第二問：ゼルダの伝説のボスの名前は？',
    answers: [
      'リンク',
      'デミグラス',
      'ガノンドロフ',
      'シーク'
    ],
    correct: 'ガノンドロフ'
  }, {
    question: '第三問：東京喰種の主人公の名前は？',
    answers: [
      '金木健',
      '金木研',
      '佐々木排世',
      '有馬貴将'
    ],
    correct: '金木研'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHundler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  
  quizIndex++;
  
  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
  
};

let handlerQuiz = 0;
while (handlerQuiz < buttonLength) {
  $button[handlerQuiz].addEventListener('click', (e) => {
    clickHundler(e);
  });
  handlerQuiz++;
}