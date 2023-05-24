import { Button, StyleSheet, Text, View, Image, TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback } from 'react-native';
import style from './app.module.js'

export default function App() {

  const pressButton = () => {
    console.log('Hi there')
  }

  const longPress = () => {
    console.log('long')
  }

  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    <View>
      <Text style={styles.test}>Hello this is my test</Text>
    </View>
    <View>
      <Text style={style.colorText}>Hello this is my test</Text>
    </View>
    <Image source={require('./assets/lego.webp')} style={{width: 100, height: 50}}></Image>
    <View > 
    <Button onPress={pressButton} color="green" title='Touch me'/>
    </View>


    <TouchableHighlight onPress={pressButton} onLongPress={longPress} underlayColor="black">
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </View>
    </TouchableHighlight>

    <TouchableOpacity onPress={pressButton} onLongPress={longPress}> 
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </View>
    </TouchableOpacity>

    <TouchableHighlight onPress={pressButton} onLongPress={longPress} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableHighlightLong</Text>
      </View>
    </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  test: {
    color: 'green',
  },
  button: {
    marginTop: 20,
    width: "40%",
    height: 50,
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white'
  }
});
