// Variaveis globais
const $inputText = document.querySelector('.inputBox');
const $list = document.querySelector('.list');
// let taskAdd = []

// Criando uma li
function createLi() {
  const li = document.createElement('li');
  li.classList.add('taskAdd');
  return li;
}

// Criando uma tarefa
function createTask(textInput) {
  if (!$inputText.value) return alert('Digite uma Tarefa!');
  clearInput();
  const li = createLi();
  li.innerHTML = textInput;
  $list.appendChild(li);
  const btn = createButton();
  li.appendChild(btn);
  clearInput();
  // taskAdd.push(li.textContent);
  // console.log(taskAdd);
  // storageTask(textInput);
  saveTask();
}

// Limpando e focando na caixa de texto
function clearInput() {
  $inputText.value = '';
  $inputText.focus();
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
  if (el.classList.contains('add')) createTask($inputText.value);
  if (el.classList.contains('btnDel')) {
    el.parentElement.remove();
    saveTask();
  }
});

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') createTask($inputText.value);
});

// function storageTask(textInput) { 
//   const $taskAdd = document.querySelector('.taskAdd')
//   // for( let task of $taskAdd)
//   const arrTask = [];
//   arrTask.push(textInput)
//   console.log($taskAdd.childNodes.length);
//   console.log(arrTask);
//   return arrTask;
// }

// document.addEventListener('click', e => console.log(taskAdd))

function saveTask() {
  const liTasks = $list.querySelectorAll('li');
  const liTask = [];

  for (let task of liTasks) {
    let tasksText = task.innerText;
    tasksText = tasksText.replace('Remove Tarefa', '').trim();
    liTask.push(tasksText);
    console.log(tasksText);
  }

  const tasksJSON = JSON.stringify(liTask);
  localStorage.setItem('tasks', tasksJSON);
}

function addTaskSaved() {
  const tasks = localStorage.getItem('tasks');
  const liTaskList = JSON.parse(tasks);
  console.log(liTaskList);
  for (let tasks of liTaskList) {
    const li = createLi();
    li.innerHTML = tasks;
    $list.appendChild(li);
    const btn = createButton();
    li.appendChild(btn);
    // console.log(tasks);
  }

}

addTaskSaved();