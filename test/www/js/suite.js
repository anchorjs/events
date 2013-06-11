define(['require',
        'mocha',
        'chai',
        'mocha-results'],
function(require, mocha, chai, results) {
  mocha.setup('bdd');
  expect = chai.expect
  
  require(['test/events.test',
           'test/events.emitter.test'],
  function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { results(mocha.run()); }
  });
});
