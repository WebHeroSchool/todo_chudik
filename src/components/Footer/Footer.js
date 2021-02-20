import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css'

const Footer = ({ count }) => (<div className={styles.boxButton}>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>Все</Button>
        <Button>Активные {count}</Button>
        <Button>Выполненные</Button>
    </ButtonGroup>
</div>);

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;