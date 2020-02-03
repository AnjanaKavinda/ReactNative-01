import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoleInput = props => {
  const [textVal, settextVal] = useState('');
  const changetext = val => {
    settextVal(val);
  };
  const addGoleHandler = () => {
    props.handlerSubmit(textVal);
    settextVal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainner}>
        <TextInput
          style={styles.inputText}
          value={textVal}
          onChangeText={changetext}
        />
        <View style={styles.ButtonContainner}>
          <View style={styles.button}>
            <Button title="Set Value" onPress={addGoleHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    flex: 1,
  },
  inputText: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  ButtonContainner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});
export default GoleInput;
