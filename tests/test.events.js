define(['events/main',
        'chai'],
function(events, chai) {
  var expect = chai.expect;

  describe("events", function() {
    
    it('shoud export Emitter', function() {
      expect(events.Emitter).to.exist;
    });
    it('shoud export EventEmitter', function() {
      expect(events.EventEmitter).to.exist;
    });
    it('shoud alias Emitter to EventEmitter', function() {
      expect(events.Emitter).to.equal(events.EventEmitter);
    });
    it('shoud export Emitter via module', function() {
      expect(events).to.equal(events.Emitter);
    });
    
  });
  
  return { name: "test.events" }
});
