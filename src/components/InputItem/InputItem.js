import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
    id="standard-full-width"
    label="Добавь еще важное дело"
    style={{ margin: 8 }}
    fullWidth
    margin="normal"
  />
</div>)
  
export default InputItem;