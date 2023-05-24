import {Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Jane', {name: 'Jane'})
        }
      />
      <Button
      title="Go to Alex's profile"
      onPress={() =>
        navigation.navigate('Alex', {name: 'Alex'})
      }
    />
    </>
    );
  };

export default HomeScreen  