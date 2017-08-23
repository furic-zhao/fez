/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

import writeFile from'../write';

export default (opts) => {

   writeFile({
    directory: `${opts.directory}`,
    success() {
      gutil.log(`创建 ${opts.directory} 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory} 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src`,
    success() {
      gutil.log(`创建 ${opts.directory}/src 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/lib`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/lib 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/lib 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/static`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/static 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/static 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/static/fonts`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/static/fonts 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/static/fonts 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/static/images`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/static/images 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/static/images 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/static/styles`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/static/styles 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/static/styles 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/views`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/views 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/views/index`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/views/index 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/index 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/views/index/module`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/views/index/module 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/index/module 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/views/public`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/views/public 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/public 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/views/public/module`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/views/public/module 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/public/module 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/views/public/utils`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/views/public/utils 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/public/utils 失败`);
    }
  });

  writeFile({
    directory: `${opts.directory}/src/custom`,
    success() {
      gutil.log(`创建 ${opts.directory}/src/custom 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/custom 失败`);
    }
  });
}
