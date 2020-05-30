class CampsiteInfo extends Component {
    render() {
        const renderCampsite = (campsite) => {
            <div key={campsite.id} className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        };

        if (this.props.campsite) {
            return (
                <div className="row">
                    {renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        }
        return <div></div>
    };
    const renderComments = (comments) => {
        if (this.props.campsites) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.props.campsites.map(comment) => }
                    <div></div>
                </div>
            )
        }

    }
};

export default CampsiteInfo;