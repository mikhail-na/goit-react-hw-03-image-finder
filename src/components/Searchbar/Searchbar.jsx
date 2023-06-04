import { Component } from 'react';
import { toast } from 'react-toastify';

import { Searchbar, SearchForm, SearchBtn, SearchInput, SearchBtnLabel } from './Searchbar.module';

export class SearchbarEl extends Component {
  state = {
    inputValue: ``,
  };


  handleInputChange = ({ currentTarget: { value } }) => {
    this.setState({ inputValue: value.toLowerCase() });
  };

  handleSubmit = e => {
    const inputValue = this.state.inputValue.trim();
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast.info('Please, enter search word!');
      return;
    }

    this.props.onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit" >
            <SearchBtnLabel >Search</SearchBtnLabel>
          </SearchBtn>
          <SearchInput
           
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="inputValue"
            value={inputValue}
            onChange={this.handleInputChange}
          />

          
        </SearchForm>
      </Searchbar>
    );
  }
}

