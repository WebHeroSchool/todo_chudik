import React from 'react';

import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
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
      <h1>Список дел:</h1>
      < InputItem />
      < ItemList items={items}/>
      < Footer count={3} />
    </div>);
  }
}

export default App;