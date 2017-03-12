let rtnData = {
    title: "FEZ Frame!",
    desc: "这是一个列表展示页，请点击下面列表的 Detail 进入详情页浏览",
    button: {
        name: "更多DEMO",
        href: "http://fez.hestudy.com"
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
