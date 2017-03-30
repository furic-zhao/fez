import Q from 'q'

import ApiData from 'public/demo-data'

export default {
    navList: () => {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.common.navData)
        })
    },
    siteName: () => {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.common.siteName)
        })
    },
    footerText: () => {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.common.footerText)
        })
    }
}
