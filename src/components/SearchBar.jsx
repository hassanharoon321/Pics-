import React from "react";
import 'semantic-ui-css/semantic.min.css';

class SearchBar extends React.Component{

    constructor(){
        super();
        this.state = {
            term : ""
        }
    }

    onFormSubmit = (event)=> {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}  }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;