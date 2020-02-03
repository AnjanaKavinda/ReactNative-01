import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoleItems = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.ListStyle}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
        ListStyle: {
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
    }
});
export default GoleItems;
