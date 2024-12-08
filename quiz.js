const quiz = [
  {
    question: '第一問：ワンピース,エネルの食べた実の名前は？',
    answers: [
      'ゴムゴムの実',
      'ゴロゴロの実',
      'ギザギザの実',
      'ピカピカの実'
    ],
    correct: 'ゴロゴロの実'
  }, {
    question: '第二問：ゼルダの伝説、リンクの所持する最強の盾の名前は？',
    answers: [
      '勇者の盾',
      'ハイラルの盾',
      '最強の盾',
      '知恵の盾'
    ],
    correct: 'ハイラルの盾'
  }, {
    question: '第三問：バキ童の本名は',
    answers: [
      '山口大樹',
      '前田大輔',
      '小島良助',
      '土岡哲郎'
    ],
    correct: '山口大樹'
  }, {
    question: '第四問：ナルトの妻は誰？',
    answers: [
      '春野サクラ',
      '日向ヒナタ',
      '山中いの',
      '日向ハナビ'
    ],
    correct: '日向ヒナタ'
  }, {
    question: '第五問：俺の好きな食べ物は？',
    answers: [
      '豚汁',
      '唐揚げ',
      '回鍋肉',
      'ハンバーグ'
    ],
    correct: '回鍋肉'
  }, {
    question: '第六問：るろうに剣心の悪役、志々雄誠の実写を行った芸能人は誰？',
    answers: [
      '佐藤健',
      '藤原竜也',
      '神木隆之介',
      '新田真剣祐'
    ],
    correct: '藤原竜也'
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