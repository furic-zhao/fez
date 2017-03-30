import Q from 'q'

import ApiData from 'public/demo-data'

export default {
    footerText() {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.common.footerText)
        })
    }
}
