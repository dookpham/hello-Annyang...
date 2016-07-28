const welcome = () => {
  console.log('hello, you');
}

const createNewTodo = (todo) => {
  console.log('Okay. Creating new task: ', todo);
}

const stopListening = () => {
  console.log('pausing now...')
  annyang.pause()
}

const createNewCommand = (trigger, response) => {
  console.log('trigger', trigger);
  console.log('action', response);
  commands[trigger] = () => console.log('Now I\'ll do...', response);
  annyang.addCommands(commands);
}

const markTaskCompleted = (task) => {
  console.log('I completed', task);
}

const youreWelcome = () => {
  console.log('You\'re welcome');
}

const showWhatYouCanDo = () => {
  for (let key in annyang) {
    console.log(key, annyang[key]);
  }
}
