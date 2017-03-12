let rtnData = {
    title: "Hello, FEZ!",
    content: "这是一个使用 FEZ 构建的系统模板，演示了基本的模块开发结构，使用 handlebars 模板渲染数据。",
    button: {
        name: `<i class="fa fa-github-alt"></i> GitHub`,
        href: "https://github.com/furic-zhao/fez"
    }
};

import Q from 'q';

export default {
    renderData: () => {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
