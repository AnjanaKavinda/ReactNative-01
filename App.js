import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import GoleItems from './components/GoleItems';
import GoleInput from './components/GoleInput';

const App:() => React$Node = () => {
  const [courceGole, setcourceGole] = useState([]);
  const [inputModel, setinputModl] = useState(false);

  const handlerSubmit = textval => {
    setcourceGole(currentGoles => [
      ...courceGole,
      {
        key: Math.random().toString(),
        value: textval,
      },
    ]);
    CanseleGoleAdd();
  };
  const removeGoleHandllaer = goleID => {
    setcourceGole(currentGoles => {
      return currentGoles.filter(goal => goal.key !== goleID);
    });
  };
  const CanseleGoleAdd = () => {
    setinputModl(false);
  };
  return (
    <View style={styles.root}>
      <Button title="Add new gole" onPress={() => setinputModl(true)} />
      <GoleInput
        handlerSubmit={handlerSubmit}
        visible={inputModel}
        onCancle={CanseleGoleAdd}
      />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={courceGole}
          renderItem={itemdata => (
            <GoleItems
              id={itemdata.item.key}
              onDelete={removeGoleHandllaer}
              item={itemdata.item.value}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
});
export default App;
