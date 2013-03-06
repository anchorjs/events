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
      
      emitter.on('foo', function() {
        fooSpy.push({});
      });
    
      it('should call listener with zero arguments', function() {
        var rv = emitter.emit('foo');
        expect(rv).to.be.true;
        expect(fooSpy).to.have.length(1);
      });
      
      it('should not call unknown listener', function() {
        var rv = emitter.emit('fubar');
        expect(rv).to.be.false;
      });
    });
    
  });
  
  return { name: "test.events.emitter" }
});
