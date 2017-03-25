import Service from './service';

export default React.createClass({
    getInitialState() {
        return {
            jumbotronData: {
                title: "",
                desc: "",
                viewMore: {
                    name: ``,
                    href: ""
                }
            }
        };
    },
    componentDidMount() {
        Service.renderData(this.props.id).then((data) => {
            this.setState({
                jumbotronData: Object.assign({}, data)
            });
        });
    },
    render() {
        return (
            <div className="jumbotron">
        <div className="container">
            <h1>hello,{this.state.jumbotronData.title}!</h1>
            <p>{this.state.jumbotronData.desc}</p>
            <p>
                <a className="btn btn-primary btn-lg" href={this.state.jumbotronData.viewMore.href} role="button">{this.state.jumbotronData.viewMore.text}
                </a>
            </p>
        </div>
    </div>
        );

    }
});