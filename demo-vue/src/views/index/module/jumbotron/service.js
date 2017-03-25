let rtnData = {
    title: "Hello, FEZ And Vue!",
    content: "这是一个使用 FEZ 构建的前端模块化开发示例，演示了基于Vue单文件组件的开发结构。",
    button: {
        name: `<i class="fa fa-github-alt"></i> GitHub`,
        href: "https://github.com/furic-zhao/fez"
    }
};

import Q from 'q';

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
