import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer'

/* const todoItem = 'Написать приложение'; */

const App = () => {
  const items = [
    {
      value: 'Написать приложение'
    },
    {
      value: 'Прописать props'
    },
    {
      value: 'Сдать задание на проверку'
    }
  ]

  return(
  <div>
    <h3>Важные дела</h3>
    < InputItem />
    < ItemList items={items}/>
    < Footer count={3} />
  </div>);
}
export default App;