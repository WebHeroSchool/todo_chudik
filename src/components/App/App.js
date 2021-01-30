import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

/* const todoItem = 'Написать приложение'; */

const App = () => {
  const items = [
    {
      value: 'Написать приложение',
      isDone: false
    },
    {
      value: 'Прописать props',
      isDone: true
    },
    {
      value: 'Сдать задание на проверку',
      isDone: false
    }
  ]

  return(
  <div className={styles.wrap}>
    <h1>Важные дела</h1>
    < InputItem />
    < ItemList items={items}/>
    < Footer count={3} />
  </div>);
}
export default App;