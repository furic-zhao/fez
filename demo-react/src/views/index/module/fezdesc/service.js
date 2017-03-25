import Q from 'q';

let rtnData = "FEZ 前端模块化工程开发框架";

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
