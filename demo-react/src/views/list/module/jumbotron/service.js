import Q from 'q';

let rtnData = {
    title: "FEZ And Vue Frame!",
    content: "这是一个FEZ整合React的列表展示页，请点击下面列表的 Detail 按钮进入详情页浏览",
    button: {
        name: "查看更多信息",
        href: "http://fez.hestudy.com"
    }
};

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
