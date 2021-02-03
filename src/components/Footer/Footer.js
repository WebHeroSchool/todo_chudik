import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css'

const Footer = ({ count }) => (<div className={styles.boxButton}>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>Все {count}</Button>
        <Button>Активные</Button>
        <Button>Выполненные</Button>
    </ButtonGroup>
</div>);

Footer.defaultProps = {
    count: 0
  };

export default Footer;