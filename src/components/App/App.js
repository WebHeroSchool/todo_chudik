import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer'

const todoItem = 'Написать приложение';

const App = () => (<div>
  <h3>Важные дела</h3>
  < InputItem />
  < ItemList todoItem={todoItem}/>
  < Footer count={3} />
</div>);

export default App;