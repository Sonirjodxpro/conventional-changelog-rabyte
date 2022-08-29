/*
 * @Copyright © 2022 讯兔科技, All Rights Reserved.
 * @该代码受知识产权法律保护.如有侵权，讯兔科技保留采用法律手段追究法律责任的权利。
 * @Description   :
 * @Author        : sunjx01@rabyte.cn
 * @Date          : 2022-08-29 15:06:36
 * @LastEditors   : sunjinxiang sunjx01@rabyte.cn
 * @LastEditTime  : 2022-08-29 15:18:13
 */
'use strict'
const Q = require('q');
const conventionalChangelog = require('./conventional-changelog');
const parserOpts = require('./parser-opts');
const recommendedBumpOpts = require('./conventional-recommended-bump');
const writerOpts = require('./writer-opts');
const gitRawCommitsOpts = require('./git-raw-commit');


module.exports = Q.all([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts, gitRawCommitsOpts])
  .spread((conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts,gitRawCommitsOpts) => {
    return { conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts, gitRawCommitsOpts}
  });
