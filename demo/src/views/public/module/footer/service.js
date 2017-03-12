let rtnData = "© 2017 FEZ 前端模块工程自动化构建工具 Created by Furic.zhao";

import Q from 'q';

export default {
    footerText: () => {
        return Q.Promise((resolve, reject) => {
            resolve(rtnData);
        });
    }
}
