import ApiData from 'public/demo-data'

import Q from 'q'

export default {
    renderData(id = "") {
        return Q.Promise((resolve, reject) => {
            let rtnData = {}

            for (let v of ApiData.frames) {
                if (v.title === id) {
                    rtnData = v
                }
            }
            resolve(rtnData)
        })
    }
}
