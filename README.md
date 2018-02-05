# jest-nested-projects-issue
[Issue] Nested projects are ignored

Minimal repo for [#5463](https://github.com/facebook/jest/issues/5463).

Try to run `jest` in root and you will get no lint errors.
Then, try to run `jest` in _packages/first_ and you will get lint errors.
