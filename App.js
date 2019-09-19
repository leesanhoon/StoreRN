import React, {Component} from 'react';
import { StyleSheet, FlatList  } from 'react-native';
import CatelogyListitem from './components/CategoryListItem';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catelogies: [
        { id: 1, name: "BMW SS1000RR" },
        { id: 2, name: "BMW S1000R" },
        { id: 3, name: "Ducati Hypermotard" },
        { id: 4, name: "Ducati Panigale V4S" },
        { id: 5, name: "Yamaha R1M" },
        { id: 6, name: "Yamaha R1" },
      ]
    }
  }
  render() {
    const { catelogies } = this.state;
    return (
      <FlatList
        data={catelogies}
        renderItem={({ item }) => <CatelogyListitem category={item} />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, backgroundColor: '#a9a9a9' }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    alignItems: "stretch",
    justifyContent: 'center',
  },
});
