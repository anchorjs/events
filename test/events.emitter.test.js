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
      var mixSpy = [];
      
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
      
      emitter.on('mix', function(a1) {
        mixSpy.push({ ml1: a1 });
      });
      
      emitter.on('mix', function(a1) {
        mixSpy.push({ ml2: a1 });
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
      
      it('should call multiple listeners', function() {
        var rv = emitter.emit('mix', '1');
        expect(rv).to.be.true;
        expect(mixSpy).to.have.length(2);
        expect(mixSpy[0].ml1).to.be.equal('1');
        expect(mixSpy[1].ml2).to.be.equal('1');
      });
      
      it('should not call unknown listener', function() {
        var rv = emitter.emit('fubar');
        expect(rv).to.be.false;
      });
    });
    
  });
  
  return { name: "test.events.emitter" }
});
