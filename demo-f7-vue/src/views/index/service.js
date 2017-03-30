import ApiData from 'public/demo-data'

import Q from 'q'

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {

            resolve({
                "index": ApiData.index,
                "common": ApiData.common
            })
        })
    }
}
