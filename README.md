### Bootstrapping

Clone this repo and run `yarn bootstrap`. This will automatically initialize a fresh repository and install the dependencies listed in `package.json`

Run `yarn test`. You should see a single test run and pass in the console.

Request a new repository from your mentor. They should follow the convention `<user>-node-js-apprenticeship`. Add this new repo as your origin, e.g.:

`git remote add origin https://github.com/moove-it/<user>-node-js-apprenticeship.git`

Make your initial commit and push to the new remote repository:

```
git add .
git commit -m "Initial commit"
git push -u origin master
```

### CircleCI

We'll use CircleCI to automatically run tests when we push to the remote repository. Once you have made your first push to master, go to https://circleci.com/setup-project/gh/moove-it/<user>-node-js-apprenticeship
and click on 'Start Building'

### Linting

This repository is equipped with an `.eslintrc`. Most text editors support [plugins for in-editor linting.](http://eslint.org/docs/user-guide/integrations) You can also run the linter manually on the command line by running `yarn lint`.

### Testing

We'll be using [Jest](https://facebook.github.io/jest/) as our testing library; it also provides a runtime and code coverage for us.

To get started, create a new test file in the test directory, and a corresponding src file in the src directory. By convention Jest looks for files ending in `**.test.js`.

There is an example test at `./test/math.test.js`.

Follow the _Red, Green, Refactor_ pattern:

**RED:** Write a test and watch it fail
**GREEN:** Write the code to make the test pass
**REFACTOR:** Iterate on your method to

How many tests do you need for a method? In general, each method should have a single responsibility, and each test should test every path through the code. Cover possible inputs: common cases and edge cases. Cover both the "happy" and "sad" paths through your code to confirm that it handles errors gracefully. If your code contains branching behavior (if/else and switch statements), you need at least one test per branch.
