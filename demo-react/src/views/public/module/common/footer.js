import Service from './common'

export default React.createClass({
    getInitialState() {
        return {
            footerText: ""
        }
    },
    componentDidMount() {
        Service.footerText().then((data) => {
            this.setState({
                footerText: data
            })
        })
    },
    render() {

        return (<footer className="container">
        <span className="pull-left">{this.state.footerText}</span>
        <span className="pull-right">
        <i className="icon icon-weixin"></i>
        <i className="icon icon-weibo"></i>
    </span>
    </footer>)

    }
})