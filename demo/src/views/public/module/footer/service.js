let rtnData = "© 2017 FEZ 前端模块化工程开发框架 Created by Furic.zhao";

import Q from 'q';

export default {
    footerText() {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
