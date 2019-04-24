import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleSubmit() {
    this.props.updateCity(this.state.searchText);
  };

  render() {
    return (
      <div>
        <input placeholder="Name your city?" type="text" onChange={this.handleOnChange} value={this.state.searchText} />
        <button onClick={this.handleSubmit}> Search </button>
      </div>
    );
  }
};

export default SearchForm;
