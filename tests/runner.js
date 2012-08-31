require.config({
  paths:{
    'events': '../',
    'mocha': 'vendor/mocha/mocha',
    'chai': 'vendor/chai/chai'
  }
});

require(['require',
         'mocha',
         'chai'],
function(require, _mocha, _chai) {
  mocha.setup('bdd');
  
  require(['test.events',
           'test.events.emitter'],
  function() {
    mocha.run();
  });
});
