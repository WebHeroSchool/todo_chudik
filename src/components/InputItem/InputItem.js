import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    errorMessage: '',
    isError: false
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: '',
        errorMessage: '',
        isError: false
      });
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        errorMessage: 'Ошибка! Поле пустое. Добавьте дело.',
        isError: true
      })
    }
  }

  render() {
    return (<div>
      <TextField
        id="standard-dense"
        label="Добавьте задание"
        fullWidth
        margin="dense"
        helperText={this.state.errorMessage}
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
      />
      <Button 
        variant="contained"
        color="primary"
        fullWidth
        onClick={this.onButtonClick}
      >
        Добавить
      </Button>
    </div>);
  }
}
  
export default InputItem;