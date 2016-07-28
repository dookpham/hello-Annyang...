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

let commands = {
  // say hi
  'hello': welcome,
  'hi': welcome,
  'hey': welcome,
  'welcome': welcome,
  // create no to do
  'create (new) (to do) (task) *todo' : createNewTodo,
  'add (new) (to do) (task) *todo' : createNewTodo,
  'make (new) (to do) (task) *todo' : createNewTodo,
  // complete task
  'I (just) (completed) (finished )*task': markTaskCompleted,
  // stop listening
  'stop listening': stopListening,
  // create new commands
  'when i say :trigger i want you to (say) *action': createNewCommand,
  // be gracious
  'thank you': youreWelcome
}

annyang.addCallback('start', () => {
  console.log('Annyang is awake!');
});

annyang.addCommands(commands);

// continuous -> keep listening even after the first phrase
// autoRestart -> restart if it shuts down for some reason
annyang.start({continuous: true});
