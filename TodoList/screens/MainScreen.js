import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native-web';
import InputForm from '../components_me/InputForm';
import TodoItem from '../components_me/TodoItem';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { FlatList } from 'react-native-gesture-handler';

const MainScreen = () => {
  const todos = useSelector(state => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === 'todo');
  const completedTasks = todos.filter((item) => item.state === 'done');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.pageTitle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length !== 0 
          ? (<FlatList 
              data = {todoTasks}
              renderItem={({item}) => <TodoItem {...item} />}
              keyExtractor={(item)=>item.id}
            />) 
          : (<Text style={styles.emptyListText}>Nothing</Text>)
        }
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length !== 0 
        ? (<FlatList
            data={completedTasks}
            renderItem={({item})=><TodoItem {...item}/>}
            keyExtractor={(item)=>item.id}
          />)
        : (<Text style={styles.emptyListText}>Nothing</Text>)
        }
      </View>
      <InputForm />
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: '#f7f8fa',
    flex: 1,
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "600",
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(0,0,0,0,2)'
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "500",
  },
  emptyListText:{
    paddingTop:10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  }
});
