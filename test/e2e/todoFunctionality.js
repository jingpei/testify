/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Basic adding and removing', 3, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('form.todo-form', {
      'todo': 'Finish testify'
    }, true);
  });

  casper.then(function() {
    test.assertExists('li.todo-item', 'should have created a todo item');
    test.assertElementCount('li.todo-item', 1, 'should have one todo');
  });

  casper.then(function() {
    this.click('.todo-remove');
    test.assertElementCount('li.todo-item', 0, 'should have no todos');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Adding and removing multiple items', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('form.todo-form', {
      'todo': 'Finish testify'
    }, true);
    this.fill('form.todo-form', {
      'todo': 'Eat dumplings'
    }, true);
  });
  
  casper.then(function(){
    test.assertElementCount('li.todo-item', 2, 'should have two todos');
  });

  casper.then(function(){
    this.click('.todo-remove');
    this.click('.todo-remove');
    test.assertElementCount('li.todo-item', 0, 'should have no todos');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Marks todo as done', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('form.todo-form', {
      'todo': 'Finish testify'
    }, true);
  });

  casper.then(function() {
    test.assertElementCount('.todo-item--done', 0);
  });

  casper.then(function() {
    this.click('.todo-done');
    test.assertElementCount('.todo-item--done', 1);
  });

  casper.run(function() {
    test.done();
  });

});

casper.test.begin('List cannot add empty todo', 1, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('form.todo-form', {
      'todo': ''
    }, true);
  });
  
  casper.then(function(){
    test.assertElementCount('li.todo-item', 0, 'should have no todos');  
  });

  casper.run(function() {
    test.done();
  });

});




