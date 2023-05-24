import {Button, Text} from 'react-native'

const AlexProfile = ({navigation, route}) => {
    return (
        <>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Jane', {name: 'Jane'})
        }
      />
      <Text>This is {route.params.name}'s profile</Text>
      </>
    );
  };

export default AlexProfile  