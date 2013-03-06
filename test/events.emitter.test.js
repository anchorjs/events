define(['events/lib/emitter'],
function(Emitter) {

  describe("Emitter", function() {
    
    it('should alias addListener to on', function() {
      expect(Emitter.prototype.addListener).to.be.equal(Emitter.prototype.on);
    });
    
    it('should alias removeListener to off', function() {
      expect(Emitter.prototype.removeListener).to.be.equal(Emitter.prototype.off);
    });
    
  });
  
  return { name: "test.events.emitter" }
});
