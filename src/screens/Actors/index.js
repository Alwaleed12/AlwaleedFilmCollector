import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ActorsScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log('Add Actor!')}
                >
                <Text style={styles.buttonText}>Add Actor</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ActorsScreen;