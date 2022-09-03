
# 一个changelog 生成规范工具

> author: sonirjodxpro@live.com

- 使用 **redmine** 或者其他工具管理项目，可以将 GitHub/GitLab 的 **issues** 地址替换成 **bugsUrl** 中的地址
- 显示 commit 对应的**提交人**及**邮箱地址**
- 使用 **emojis**

前置插件准备

- [commitizen](https://github.com/commitizen/cz-cli) 针对开发者简单的 commit 规范
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) 使用 cz-conventional-changelog 的构建标准
- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#readme) conventional-changelog 核心模块

```sh
npm i commitizen cz-conventional-changelog conventional-changelog-cli --save-dev

```

```sh
npm install conventional-changelog-rabyte --save-dev
```

## Configuration

在 package.json 中配置参数

### 不填配置的话则会按照 angular 的预设模版生成 CHANGELOG

```json
{
  "scripts": {
    "commit": "git-cz && git push",
    "version": "conventional-changelog -p rabyte -i CHANGELOG.md -s -n && git add CHANGELOG.md"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/example.git"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

**bugsUrl**

Type: `string` Default: `false`

当你需要将 issues URL 替换成其他 URL 时，使用该参数，例如使用 **redmine** 管理项目, `bugsUrl: 'https://redmine.example.com/issues/'`

如果不填 `bugsUrl` 则会根据 **package.json** 中的 `repository.url` 来作为 issues URL

如果你使用了第三方的协作系统（例如 **bitbucket**）， 推荐你使用这个插件 [conventional-changelog-angular-bitbucket](https://github.com/uglow/conventional-changelog-angular-bitbucket)

**emojis**

Type: `boolean` Default: `false`

### emojis types 参考 [gitmoji](https://gitmoji.carloscuesta.me/)

| Commit Type | Title                    | Description                                                                                                 | Emojis |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | ------ |
| `feat`      | Features                 | A new feature                                                                                               | ✨      |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   | 🐛      |
| `docs`      | Documentation            | Documentation only changes                                                                                  | 📝      |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      | 💄      |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   | ♻️      |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     | ⚡️      |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           | ✅      |
| `build`     | Build                    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         | 👷      |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | 🔧      |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           | 🎫      |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   | ⏪      |


## Usage

生成 CHANGELOG 之前得**先** commit，记得在 **master** **主分支**上发布版本，再生成 CHANGELOG，流程如下：

```sh
git add .

git commit -m "feat: init"

git push

npm version patch

git push --tags
```
