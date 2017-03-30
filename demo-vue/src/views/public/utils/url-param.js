export default (name, url) => {
    return Q.Promise((resolve, reject) => {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r_txt = url ? url : window.location.search

        let r = r_txt.substr(1).match(reg)

        resolve(r ? decodeURIComponent(r[2]) : null)
    })
}
