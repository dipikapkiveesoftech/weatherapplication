import React from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Select Your City"
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}
