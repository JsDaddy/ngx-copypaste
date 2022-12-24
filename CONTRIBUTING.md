## Commitlint

Commitlint is used to have a common way of writing commit messages. `Conventional Commits` extension could help with that.
Basic structure of commit message: `type(scope): title`

`type` can be: [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test].

`scope` is a task number from jira - like AL-9999.

If you use Mac OS please check that you have right access to excute hooks. If need please change

```
chmod a+x .husky/pre-commit
```

```
chmod a+x .husky/commit-msg
```
