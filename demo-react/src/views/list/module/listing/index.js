import Service from './service';

export default React.createClass({
    getInitialState() {
        return {
            listing: []
        };
    },
    componentDidMount() {

        Service.renderData().then((data) => {
            this.setState({
                listing: data
            })
        });
    },
    render() {
        let listing = [];

        for (let item of this.state.listing) {
            listing.push(<div key={item.title} className="col-md-4">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p><a className="btn btn-default" href={'article.html?id=' + item.id} role="button">Detail</a></p>
            </div>);
        }

        return (
            <div className="container">
        <div className="row">
            {listing}
        </div>
        <hr />
    </div>
        );

    }
});