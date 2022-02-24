import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import addAssignment from '../Redux/Actions/index';

class InputList extends React.Component {
  state = {
    textValue: ''
  };

  onInputChange = ({ target: { value }}) => {
    this.setState(() => ({
      textValue: value,
    }))
  }

  handleAddValue = () => {
    const { add } = this.props;
    const { textValue } = this.state;
    add(textValue);
  }

  render() {
    const { onInputChange, handleAddValue } = this;

    return (
      <div>
        <input 
          type="text"
          placeholder="Digite a Tarefa"
          onChange={ onInputChange }
        />
        <button
          type="button"
          onClick={ handleAddValue }
        >
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const { func } = PropTypes;

InputList.propTypes = {
  add: func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
})

export default connect(null, mapDispatchToProps)(InputList);