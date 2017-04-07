import ApiData from 'public/demo-data';

import Q from 'q';

export default {
  renderData() {
    let rtnData = [];
    return Q.Promise((resolve, reject) => {

      for (let v of ApiData) {
        let dataItem = {};

        dataItem.title = v.title;
        dataItem.desc = v.desc;
        dataItem.id = v.title;

        rtnData.push(dataItem);
      }

      resolve(rtnData);
    });
  }
}
