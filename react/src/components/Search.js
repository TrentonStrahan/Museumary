import React from 'react';
import { Link, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import style from './../Header.css';
=======
>>>>>>> e179f5cd6879af2be90c39296b067379fe94b824

class Search extends React.Component {
    constructor() {
        super();
        this.state={
            items:[],
            activePage: 1,
            search_value: "",
            redirect: false
        };
    }

    onInputKeyPress(event) {
        switch (event.keyCode) {
            case 13:
                console.log(this.state.search_value);
                this.setState({redirect: true})
                event.preventDefault();
                break;
        }
    }

    textChange(event) {
        this.setState({search_value: event.target.value});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: '/results',
                state: { search: this.state.search_value }
            }} />;
        }
        else {
            return (

                <div class="input-group">
                    <input 
                        type="text" 
                        name="name"
                        class="form-control" 
                        placeholder="Search"
                        onChange={this.textChange.bind(this)}
                        onKeyDown={this.onInputKeyPress.bind(this)}
                    />
                    <div class="input-group-btn">
                      <button class="btn btn-default" type="submit">
                        <i class="glyphicon glyphicon-search"></i>
                      </button>

                    </div>
                </div>
            );
        }
    }
}

export default Search;
