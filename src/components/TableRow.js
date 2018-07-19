
import React from 'react';
import PropTypes from 'prop-types';

export const TableRow = (props) => {
  const { rowItem } = props;
  return  ( 
     <th scope="col">{rowItem}</th> 
    );
}

TableRow.propTypes = {
  rowItem:PropTypes.string.isRequired,
};
