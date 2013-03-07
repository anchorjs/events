define(['events/lib/emitter'],
function(Emitter) {

  describe("Emitter", function() {
    
    it('should alias addListener to on', function() {
      expect(Emitter.prototype.addListener).to.be.equal(Emitter.prototype.on);
    });
    
    it('should alias removeListener to off', function() {
      expect(Emitter.prototype.removeListener).to.be.equal(Emitter.prototype.off);
    });
    
    
    describe("emit", function() {
      var emitter = new Emitter();
      var fooSpy = [];
      var barSpy = [];
      var bazSpy = [];
      var bixSpy = [];
      
      emitter.on('foo', function() {
        fooSpy.push({});
      });
      
      emitter.on('bar', function(a1) {
        barSpy.push({ a1: a1 });
      });
      
      emitter.on('baz', function(a1, a2) {
        bazSpy.push({ a1: a1, a2: a2 });
      });
      
      emitter.on('bix', function(a1, a2, a3) {
        bixSpy.push({ a1: a1, a2: a2, a3: a3 });
      });
    
      it('should call listener with zero arguments', function() {
        var rv = emitter.emit('foo');
        expect(rv).to.be.true;
        expect(fooSpy).to.have.length(1);
        
        var rv = emitter.emit('foo');
        expect(rv).to.be.true;
        expect(fooSpy).to.have.length(2);
      });
      
      it('should call listener with one argument', function() {
        var rv = emitter.emit('bar', '1');
        expect(rv).to.be.true;
        expect(barSpy).to.have.length(1);
        expect(barSpy[0].a1).to.be.equal('1');
      });
      
      it('should call listener with two arguments', function() {
        var rv = emitter.emit('baz', '1', '2');
        expect(rv).to.be.true;
        expect(bazSpy).to.have.length(1);
        expect(bazSpy[0].a1).to.be.equal('1');
        expect(bazSpy[0].a2).to.be.equal('2');
      });
      
      it('should call listener with three arguments', function() {
        var rv = emitter.emit('bix', '1', '2', '3');
        expect(rv).to.be.true;
        expect(bixSpy).to.have.length(1);
        expect(bixSpy[0].a1).to.be.equal('1');
        expect(bixSpy[0].a2).to.be.equal('2');
        expect(bixSpy[0].a3).to.be.equal('3');
      });
      
      it('should not call unknown listener', function() {
        var rv = emitter.emit('fubar');
        expect(rv).to.be.false;
      });
    });
    
    describe("addListener", function() {
      var emitter = new Emitter();
      var newListenerSpy = [];
      var mixSpy = [];
      var maxSpy = [];
      
      emitter.on('newListener', function(type, listener) {
        newListenerSpy.push({ type: type, listener: listener });
      });
      
      emitter.on('mix', function(a1) {
        mixSpy.push({ ml1: a1 });
      });
      
      emitter.on('mix', function(a1) {
        mixSpy.push({ ml2: a1 });
      });
      
      emitter.on('max', function(a1) {
        maxSpy.push({ ml1: a1 });
      });
      
      emitter.on('max', function(a1) {
        maxSpy.push({ ml2: a1 });
      });
      
      emitter.on('max', function(a1) {
        maxSpy.push({ ml3: a1 });
      });
    
      it('should call two listeners', function() {
        var rv = emitter.emit('mix', '1');
        expect(rv).to.be.true;
        expect(mixSpy).to.have.length(2);
        expect(mixSpy[0].ml1).to.be.equal('1');
        expect(mixSpy[1].ml2).to.be.equal('1');
      });
    
      it('should call three listeners', function() {
        var rv = emitter.emit('max', '2');
        expect(rv).to.be.true;
        expect(maxSpy).to.have.length(3);
        expect(maxSpy[0].ml1).to.be.equal('2');
        expect(maxSpy[1].ml2).to.be.equal('2');
        expect(maxSpy[2].ml3).to.be.equal('2');
      });
      
      it('should call new listener', function() {
        expect(newListenerSpy).to.have.length(5);
        expect(newListenerSpy[0].type).to.be.equal('mix');
        expect(newListenerSpy[0].listener).to.be.a('function');
        expect(newListenerSpy[2].type).to.be.equal('max');
        expect(newListenerSpy[2].listener).to.be.a('function');
      });
    });
    
    describe("once", function() {
      var emitter = new Emitter();
      var fooSpy = [];
      
      emitter.once('foo', function(a1) {
        fooSpy.push({ a1: a1 });
      });
      
      it('should call listener once', function() {
        var rv = emitter.emit('foo', '1');
        expect(rv).to.be.true;
        expect(fooSpy).to.have.length(1);
        expect(fooSpy[0].a1).to.be.equal('1');
        
        rv = emitter.emit('foo', '2');
        expect(rv).to.be.false;
        expect(fooSpy).to.have.length(1);
      });
    });
    
  });
  
  return { name: "test.events.emitter" }
});
