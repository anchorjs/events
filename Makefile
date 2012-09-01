PHANTOMJS = phantomjs

test: test-phantomjs

test-phantomjs:
	$(PHANTOMJS) tests/vendor/phantomjs-mocha/scripts/mocha.js tests/runner/phantomjs.html

.PHONY: test-phantomjs
