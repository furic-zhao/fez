let navData = [{
    name: "首页",
    href: "index.html"
}, {
    name: "列表页",
    href: "list.html"
}];

let siteName = "FEZ DEMO";

export default {
    navList() {
            return Q.Promise((resolve, reject) => {
                resolve(navData);
            });
        },
        siteName() {
            return Q.Promise((resolve, reject) => {
                resolve(siteName);
            });
        }
}
