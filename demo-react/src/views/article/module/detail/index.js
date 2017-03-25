import Service from './service';

export default React.createClass({
    getInitialState() {
        return {
            content: ""
        };
    },
    componentDidMount() {
        Service.renderData(this.props.id).then((data) => {
            this.setState({
                content: data.content
            });
        });
    },
    render() {
        return (
            <div className="container">
        <div className="row">
            <div className="col-sm-12 blog-main">
                <div className="blog-post">
                    <hr />
                    <div dangerouslySetInnerHTML={{
                __html: this.state.content
            }}></div>
                </div>
            </div>
        </div>
        <hr />
    </div>
        );

    }
});