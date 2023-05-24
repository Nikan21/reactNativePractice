import {Button, Text} from 'react-native'

const JaneProfile = ({navigation, route}) => {
    return (
        <>
      <Button
        title="Go to Alex's profile"
        onPress={() =>
          navigation.navigate('Alex', {name: 'Alex'})
        }
      />
      <Text>This is {route.params.name}'s profile</Text>
      </>
    );
  };

export default JaneProfile  