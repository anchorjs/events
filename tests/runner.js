require.config({
  paths:{
    'events': '../',
    'mocha': 'vendor/mocha/1.0.1/mocha',
    'chai': 'vendor/chai/0.5.2/chai'
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
