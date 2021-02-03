import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './Item.module.css';

class Item extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return (<div className={styles.grid}>
      <div className={styles.checkbox}>
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
          onClick={() => onClickDone(id)}
        />
      </div>
      <div className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
        }>
        {value}
      </div>
      <Tooltip onClick={() => onClickDelete(id)} title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>);
  }
}


Item.propTypes = {
  isDone: PropTypes.bool.isRequired
};

export default Item;