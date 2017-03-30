import Q from 'q'

import ApiData from 'public/demo-data'

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.index.jumbotron)
        })
    }
}
