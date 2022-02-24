import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        <div>
          { 
            list && 
            list.map((element, index) => (
              <p key={ index }>
                { element }
              </p>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
})

const { array } = PropTypes;

List.propTypes = {
  list: array.isRequired,
}

export default connect(mapStateToProps, null)(List);