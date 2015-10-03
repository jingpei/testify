
describe('API integration', function(){
  var server, setupStub, JSONresponse;

  before(function(){
    server = sinon.fakeServer.create();
    setupStub = sinon.stub(todo, 'setup');
    JSONresponse = JSON.stringify({
      todos: ['Finish Testify', 'Meetup at Mission Dolores', 'Hardly Strict']
    });
    server.respondWith(
      'GET', 
      'http://localhost:3000/todos', 
      [200, {'Content-Type':'application/json'}, JSONresponse]);
  });

  after(function(){
    server.restore();
    setupStub.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    todo.init();
    server.respond();
    var todos = JSON.parse(JSONresponse);
    sinon.assert.calledWith(setupStub, todos.todos); 
    // expect(setupStub.calledWith(todos.todos)).to.be.true;
  });
});
