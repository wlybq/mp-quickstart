const os = require('os')
const fs = require('fs')
const path = require('path')


class CleanPlugin {

  constructor(options) {
    // todo
    this.cleanDistDir = path.resolve(__dirname, '../dist/');
  }

  apply(compiler) {
    compiler.plugin('done', () => {
      this.clean();
    });
  }

  clean() {
    const _self = this;
    const cleanDistDir = this.cleanDistDir;
    const staticDir = path.resolve(cleanDistDir, './static/');
    fs.readdir(staticDir, (err, files) => {
      if (err) return;
      files.forEach(fileName => {
        const realPath = path.resolve(cleanDistDir, fileName);
        // console.log(realPath);
        fs.stat(realPath, (err, stat) => {
          if (err) return;
          if (stat) {
            if (stat.isDirectory()) {
              _self.rmdir(realPath);
            } else if (stat.isFile()) {
              fs.unlink(realPath);
            }
          }
        });
      });
    });
  }

  rmdir (dir, callback) {
    const _self = this;
    fs.readdir(dir, (err, files) => {
        /**
         * @desc 内部循环遍历使用的工具函数
         * @param {Number} index 表示读取files的下标
         */
        function next(index) {
            // 如果index 等于当前files的时候说明循环遍历已经完毕，可以删除dir，并且调用callback
            if (index == files.length) return fs.rmdir(dir, callback)
            // 如果文件还没有遍历结束的话，继续拼接新路径，使用fs.stat读取该路径
            let newPath = path.join(dir, files[index])
            // 读取文件，判断是文件还是文件目录

            fs.stat(newPath, (err, stat) => {
                if (stat.isDirectory() ) {
                    // 因为我们这里是深度循环，也就是说遍历玩files[index]的目录以后，才会去遍历files[index+1]
                    // 所以在这里直接继续调用rmdir，然后把循环下一个文件的调用放在当前调用的callback中
                    _self.rmdir(newPath, () => next(index+1))
                } else {
                    // 如果是文件，则直接删除该文件，然后在回调函数中调用遍历nextf方法，并且index+1传进去
                    fs.unlink(newPath, () => next(index+1))
                }
            })
        }
        next(0)
    })
  }
}


module.exports = CleanPlugin

