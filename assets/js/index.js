// Variaveis globais
const inputText = document.querySelector('.inputBox');
const list = document.querySelector('.list');

// Criando uma li
function createLi() {
  const li = document.createElement('li');
  li.classList.add('taskAdd');
  return li;
}

// Criando uma tarefa
function createTask(textInput) {
  if (!inputText.value) return alert('Digite uma Tarefa!')
  clearInput();
  const li = createLi();
  li.innerHTML = textInput;
  list.appendChild(li);
  const btn = createButton();
  li.appendChild(btn);
  clearInput();
}

// Limpando e focando na caixa de texto
function clearInput() {
   inputText.value = '';
   inputText.focus();
}

// Criando o botão de remover tarefa
function createButton() {
  btnDel = document.createElement('input');
  btnDel.value = 'Remover Tarefa';
  btnDel.setAttribute('type', 'button');
  btnDel.setAttribute('class', 'btnAdd btnDel');
  return btnDel;
}

// Triggres 
document.addEventListener('click', e => {
  const el = e.target;
  if (el.classList.contains('add')) createTask(inputText.value);
  if (el.classList.contains('btnDel')) el.parentElement.remove();
});

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') createTask(inputText.value);
});

