/**
 * Created by Bien on 2017-05-16.
 */
import React from 'react';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          term: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    // onInputChange(e) {
    //     console.log(e.target.value);
    // }

    onSubmit(e) {
        e.preventDefault();
        if(true) {
            alert('Signup or Login to ask');
        }
    }

    handleModal(e) {
        if(true) {
            alert("Signup or Login to search");
        }
    }

    render() {
      return (
          <form className="input-group">
                  <input
                placeholder="Search..."
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                onClick={this.handleModal}
              />
              <span className="input-group-btn">
                  <button
                      type="submit"
                      className="btn btn-default"
                      onClick={this.onSubmit}
                  >Search
                  </button>
              </span>
          </form>
      );
    }
}
