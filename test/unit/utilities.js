var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
      todo.should.have.property('setup');
      todo.should.have.property('init');
      assert.isFunction(todo.setup, 'setup is a todo function');
      assert.isFunction(todo.init, 'init is a todo function');
      // expect(todo.setup).to.be.an('function');
      // expect(todo.init).to.be.an('function');
    });
  });
});

describe('the todo.util methods', function() {
  describe('the todo.util.trimTodoName', function(){
    it('should have trimTodoName function', function(){
      expect(todo.util.trimTodoName).to.be.an('function');
    });
    it('should trim a todo', function(){
      var withSpaces = "   get groceries  ";
      var trimmed = todo.util.trimTodoName(withSpaces);
      expect(trimmed).to.be.equal('get groceries');
      trimmed.should.have.length(13);
    });
  });

  describe('the todo.util.isValidTodoName', function(){
    it('should have isValidTodoName function', function(){
      expect(todo.util.isValidTodoName).to.be.an('function');
    });
    it('should return whether a todo name is valid or not', function(){
      expect(todo.util.isValidTodoName('a      ')).to.be.false;
      expect(todo.util.isValidTodoName('buy milk')).to.be.true;
    });
  });

  describe('the todo.util.getUniqueId', function(){
    it('should have getUniqueId', function(){
      expect(todo.util.getUniqueId).to.be.an('function');
    });
    it('should return a uniqueId', function(){
      var idOne = todo.util.getUniqueId();
      var idTwo = todo.util.getUniqueId();
      expect(idOne).to.not.equal(idTwo);
    });
  });
});
