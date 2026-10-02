// Exatamente três perguntas. O índice de cada resposta corresponde ao value do radio.
const answers = [
  {
    "correct": 0,
    "explanation": "Link é o herói controlado na maioria dos jogos da série."
  },
  {
    "correct": 1,
    "explanation": "RPG significa Role-Playing Game: jogo de interpretação de papéis."
  },
  {
    "correct": 2,
    "explanation": "Minecraft permite explorar e construir em um mundo formado por blocos."
  }
];
const form = document.querySelector('#quiz');
const result = document.querySelector('#result');
const validation = document.querySelector('#validation');
const check = document.querySelector('#check');
let finished = false;
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o recarregamento padrão do formulário.
  if (finished) return; // Evita pontuação duplicada.
  const selected = answers.map((_, index) => form.querySelector(`input[name="q${index}"]:checked`));
  const missing = selected.findIndex((answer) => answer === null);
  if (missing !== -1) {
    validation.textContent = `Responda à pergunta ${missing + 1} antes de conferir.`;
    form.querySelector(`input[name="q${missing}"]`).focus();
    return;
  }
  validation.textContent = '';
  let score = 0;
  answers.forEach((answer, index) => {
    const correct = Number(selected[index].value) === answer.correct;
    if (correct) score += 1;
    const feedback = document.querySelector(`#feedback-${index}`);
    feedback.textContent = `${correct ? 'Acertou!' : 'Errou.'} ${answer.explanation}`;
    feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
    feedback.hidden = false;
  });
  form.querySelectorAll('input').forEach((input) => { input.disabled = true; });
  finished = true;
  check.disabled = true;
  document.querySelector('#final-score').textContent = `Pontuação final: ${score} de 3`;
  result.hidden = false;
  result.focus();
});
document.querySelector('#restart').addEventListener('click', () => {
  form.reset();
  form.querySelectorAll('input').forEach((input) => { input.disabled = false; });
  form.querySelectorAll('.feedback').forEach((feedback) => { feedback.hidden = true; feedback.textContent = ''; });
  validation.textContent = '';
  result.hidden = true;
  check.disabled = false;
  finished = false;
  form.querySelector('input').focus();
});
