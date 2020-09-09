import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class ViewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/w1.jpg'),
        require('../assets/w5.jpg'),
        require('../assets/w3.jpg'),
        require('../assets/w4.jpg'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.maincardContainer}>
        <SliderBox images={this.state.images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincardContainer: {
    marginTop: 10,

    marginBottom: 10,
  },
});
