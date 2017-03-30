import Service from './service'

export default React.createClass({
    getInitialState() {
        return {
            jumbotronData: {
                title: "",
                content: "",
                button: {
                    name: ``,
                    href: ""
                }
            }
        }
    },
    componentDidMount() {

        Service.renderData().then((data) => {
            this.setState({
                jumbotronData: Object.assign({}, data)
            })
        })
    },
    render() {
        return (
            <div className="jumbotron">
        <div className="container">
            <h1>{this.state.jumbotronData.title}</h1>
            <p>{this.state.jumbotronData.content}</p>
            <p>
                <a className="btn btn-primary btn-lg" href={this.state.jumbotronData.button.href} role="button" dangerouslySetInnerHTML={{
                __html: this.state.jumbotronData.button.name
            }}></a>
            </p>
        </div>
    </div>
        )

    }
})