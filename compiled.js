'use strict';

var welcome = function welcome() {
  console.log('hello, you');
};

var createNewTodo = function createNewTodo(todo) {
  console.log('Okay. Creating new task: ', todo);
};

var stopListening = function stopListening() {
  console.log('pausing now...');
  annyang.pause();
};

var createNewCommand = function createNewCommand(trigger, response) {
  console.log('trigger', trigger);
  console.log('action', response);
  commands[trigger] = function () {
    return console.log('Now I\'ll do...', response);
  };
  annyang.addCommands(commands);
};

var markTaskCompleted = function markTaskCompleted(task) {
  console.log('I completed', task);
};

var youreWelcome = function youreWelcome() {
  console.log('You\'re welcome');
};

var commands = {
  // say hi
  'hello': welcome,
  'hi': welcome,
  'hey': welcome,
  'welcome': welcome,
  // create no to do
  'create (new) (to do) (task) *todo': createNewTodo,
  'add (new) (to do) (task) *todo': createNewTodo,
  'make (new) (to do) (task) *todo': createNewTodo,
  // complete task
  'I (just) (completed) (finished )*task': markTaskCompleted,
  // stop listening
  'stop listening': stopListening,
  // create new commands
  'when i say :trigger i want you to (say) *action': createNewCommand,
  // be gracious
  'thank you': youreWelcome
};

annyang.addCallback('start', function () {
  console.log('Annyang is awake!');
});

annyang.addCommands(commands);

// continuous -> keep listening even after the first phrase
// autoRestart -> restart if it shuts down for some reason
annyang.start({ continuous: true });
