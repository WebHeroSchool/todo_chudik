import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone }) => (<div className={styles.grid}>
  <div className={styles.checkbox}>
    <Checkbox
      defaultChecked
      color="primary"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
      onClick={() => onClickDone(isDone)}
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
  <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
</div>);

export default Item;