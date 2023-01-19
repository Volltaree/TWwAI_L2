import React, {Component} from "react";
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }   
    componentDidMount() {
fetch("https://rickandmortyapi.com/api/character/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
                });
                }
                )
                }
                render() {
                    const {item} = this.props;
                    return (<div className="card" style={{width:'400px'}}>
                    <img src={item.image}
                className="card-img-top" style={{width:'400px'}} alt="img"/><div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.type}</p>
<a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
)
}
}
export default List;