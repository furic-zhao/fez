let rtnData = "FEZ 前端工程模块化、自动化开发框架";

import Q from 'q';

export default {
    renderData: () => {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
