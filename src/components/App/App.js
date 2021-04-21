import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <header className={styles.header}>
        <a 
          href='https://webheroschool.ru/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.school_link}
        >
          <div className={styles.school_logo}></div>
        </a>
        <NavLink 
          to='/'
          exact
          className={styles.header__link}
          activeClassName={styles.header__link_active}>
            Обо мне
        </NavLink>
        <NavLink 
          to='/todo'
          exact
          className={styles.header__link} 
          activeClassName={styles.header__link_active}>
            Дела
        </NavLink>
      </header>
      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
      </div>
    </div>
  </Router>
);

export default App;