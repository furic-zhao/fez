let rtnData = {
    title: "FEZ Frame!",
    content: "这是一个FEZ整合Vue的列表展示页，请点击下面列表的 Detail 进入详情页浏览",
    button: {
        name: "查看更多信息",
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
