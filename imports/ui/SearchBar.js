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
        alert("button test");
    }

    handleModal(e) {
        alert("test");
    }

    render() {
      return (

          <form className="input-group">
                  <input
                placeholder="Ask or Search NoName"
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
                  >Ask Question
                  </button>
              </span>
          </form>

      );
    }
}
