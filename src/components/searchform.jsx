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
        <input onChange={this.handleOnChange} type="text" value={this.state.searchText} />
        <button onClick={this.handleSubmit} type="submit"> Search </button>
      </div>
    );
  }
};

export default SearchForm;
