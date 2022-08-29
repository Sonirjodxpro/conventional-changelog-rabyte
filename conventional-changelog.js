/*
 * @Copyright © 2022 讯兔科技, All Rights Reserved.
 * @该代码受知识产权法律保护.如有侵权，讯兔科技保留采用法律手段追究法律责任的权利。
 * @Description   :
 * @Author        : sunjx01@rabyte.cn
 * @Date          : 2022-08-29 15:06:30
 * @LastEditors   : sunjinxiang sunjx01@rabyte.cn
 * @LastEditTime  : 2022-08-29 15:06:31
 */
'use strict'

const Q = require('q')
const parserOpts = require('./parser-opts')
const writerOpts = require('./writer-opts')

module.exports = Q.all([parserOpts, writerOpts])
  .spread((parserOpts, writerOpts) => {
    return { parserOpts, writerOpts }
  })
