import Q from 'q';

let siteName = "FEZ Vue DEMO";

let navData = [{
    name: "首页",
    href: "index.html"
}, {
    name: "列表页",
    href: "list.html"
}];

let footerText = "© 2017 FEZ 前端模块化工程开发框架 Created by Furic.zhao";

export default {
    navList: () => {
        return Q.Promise((resolve, reject) => {
            resolve(navData);
        });
    },
    siteName: () => {
        return Q.Promise((resolve, reject) => {
            resolve(siteName);
        });
    },
    footerText: () => {
        return Q.Promise((resolve, reject) => {
            resolve(footerText);
        });
    }
}
