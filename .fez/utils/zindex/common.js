/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'
const stat = fs.stat

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

const common = {
  /*
   * 复制目录中的所有文件包括子目录
   * @param{ String } 需要复制的目录
   * @param{ String } 复制到指定的目录
   */
  copy(src, dist) {
    // 读取目录中的所有文件/目录
    fs.readdir(src, (err, paths) => {
      if (err) {
        throw err
      }

      paths.map((path) => {
        let _src = src + '/' + path,
          _dist = dist + '/' + path,
          readable,
          writable

        stat(_src, (err, st) => {
          if (err) {
            throw err
          }

          // 判断是否为文件
          if (st.isFile()) {
            // 创建读取流
            readable = fs.createReadStream(_src)
            // 创建写入流
            writable = fs.createWriteStream(_dist)
            // 通过管道来传输流
            readable.pipe(writable)
          }
          // 如果是目录则递归调用自身
          else if (st.isDirectory()) {
            common.exists(_src, _dist, common.copy)
          }
        })
      })
    })
  },

  /**
   * 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
   */
  exists(src, dist, callback) {
    const distDir = fs.existsSync(dist)

    if (distDir) {
      callback(src, dist)
    } else {
      fs.mkdir(dist, () => {
        callback(src, dist)
      })
    }
  },
}

export default common

/**
 * -----------------
 * 《香港之行》
 * 于 2016年9月 凌霄阁
 * -----------------
 * 雨后登高望山楼
 * 溢彩香江曜中秋
 * 悠游凌霄美食汇
 * 不负此行挂心头
 */
