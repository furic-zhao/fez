import Service from './common'
import Q from 'q'

export default React.createClass({
    getInitialState() {
        return {
            rtnData: {
                siteName: "",
                navList: []
            }
        }
    },
    componentDidMount() {
        Q.all([
            Service.siteName(),
            Service.navList()
        ]).then((data) => {
            let rtnData = {
                siteName: data[0],
                navList: data[1]
            }
            this.setState({
                rtnData: rtnData
            })
        })
    },
    render() {
        let navList = []

        for (let item of this.state.rtnData.navList) {
            navList.push(<li key={item.name}><a href={item.href}>{item.name}</a></li>)
        }

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">{this.state.rtnData.siteName}</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                {navList}
                </ul>
            </div>
        </div>
    </nav>
        )

    }
})