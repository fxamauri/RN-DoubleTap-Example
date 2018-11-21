import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback
} from 'react-native';

const w = Dimensions.get('window');

export default class App extends React.Component {
    state = {
        liked: false
    };

    toggleLike = () => this.setState(state => ({ liked: !state.liked }));

    lastTap = null;
    handleDoubleTap = () => {
      const now = Date.now();
      const DOUBLE_PRESS_DALAY = 300;
      if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DALAY) {
          this.toggleLike();
      } else {
          this.lastTap = now;
      }

    };

    render() {
        return (
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
                  <Image
                      source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=${ w.width }`}}
                      style={{ width: w.width, height: w.width }}
                      resizeMode="cover"
                  />
              </TouchableWithoutFeedback>
              <View style={styles.iconRow}>
                  <TouchableOpacity onPress={this.toggleLike }>
                      <Image
                        source={
                            this.state.liked
                            ? require('./images/heart.png')
                            : require('./images/heart-outline.png')
                        }
                        style={styles.heartIcon}
                        resizeMode="cover"
                      />
                  </TouchableOpacity>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center'
   },
    iconRow: {
       flexDirection: 'row',
       alignSelf: 'stretch',
       marginTop: 10,
       paddingVertical: 5,
       paddingHorizontal: 15
    },
    heartIcon: {
       width: 20,
       height: 20
    }
});