// import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import DisplayData from './DisplayData';
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterSearch:'',
        }
    }
        

    inputChange = (event) => {
        this.setState({filterSearch: event.target.value})
    };

    formSubmit = (event) => {
        event.preventDefault();
        this.props.formSubmit(this.state.filterSearch)
    }


    render() {
        return (
            <div class="input-group">
                <h3>Search Songs</h3>
    
                <input type="text" placeholder='Search by Genre...'onChange={this.inputChange} value={this.state.filterSearch}/>
                <button type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark">search</button>
        
            </div>
        )
    }

}
export default SearchBar;

//     }
//     render() { 
//         return (
//             <div className="ui segment search-bar">
//                 <form className="ui form">
//                     <div className="field">
//                         <label>Song Search</label>
//                         <input type="text" onChange={this.inputChange} value={this.state.search}/>
//                     </div>
//                 </form>
//             </div>
//          );
//     }
// }
 





    // const handleSubmit = (event) => {
    //     event.preventDefault();

    // }
    // <Fragment>
        //     <h1>Search</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text"  placeholder="Search for songs by artist"/>
        //         {/* <button>type="submit">Search Song</button> */}
        //     </form>
        // </Fragment>