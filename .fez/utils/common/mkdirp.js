/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

import path from 'path'

import fs from 'fs'

let _0777 = parseInt('0777', 8)

function mkdirP(p, opts, f, made) {
  if (typeof opts === 'function') {
    f = opts
    opts = {}
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  let mode = opts.mode
  let xfs = opts.fs || fs

  if (mode === undefined) {
    mode = _0777 & (~process.umask())
  }
  if (!made) made = null

  let cb = f || function() {}
  p = path.resolve(p)

  xfs.mkdir(p, mode, function(er) {
    if (!er) {
      made = made || p
      return cb(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        mkdirP(path.dirname(p), opts, function(er, made) {
          if (er) cb(er, made)
          else mkdirP(p, opts, cb, made)
        })
        break
      default:
        xfs.stat(p, function(er2, stat) {
          if (er2 || !stat.isDirectory()) cb(er, made)
          else cb(null, made)
        })
        break
    }
  })
}

mkdirP.sync = function sync(p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  let mode = opts.mode
  let xfs = opts.fs || fs

  if (mode === undefined) {
    mode = _0777 & (~process.umask())
  }
  if (!made) made = null

  p = path.resolve(p)

  try {
    xfs.mkdirSync(p, mode)
    made = made || p
  } catch (err0) {
    switch (err0.code) {
      case 'ENOENT':
        made = sync(path.dirname(p), opts, made)
        sync(p, opts, made)
        break
      default:
        let stat
        try {
          stat = xfs.statSync(p)
        } catch (err1) {
          throw err0
        }
        if (!stat.isDirectory()) throw err0
        break
    }
  }

  return made
}

export default mkdirP
