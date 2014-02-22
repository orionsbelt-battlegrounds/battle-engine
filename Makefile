REPORTER = spec
TEST_CMD = @NODE_ENV=test clear && ./node_modules/.bin/mocha \
					 "test/**/*.js" \
					 --reporter $(REPORTER) \
					 --check-leaks

test:
	$(TEST_CMD)

test-w:
	$(TEST_CMD) --watch

trace:
	node ~/node/tracegl.js app.js

deploy:
	./node_modules/.bin/browserify ./obb.js -r ./obb.js --standalone obb -o dist/obb-engine.js

.PHONY: test test-w trace deploy
