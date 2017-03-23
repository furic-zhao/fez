let rtnData = "FEZ 前端模块化工程开发框架";

import Q from 'q';

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
