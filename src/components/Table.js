
import React from 'react';
import { TableRow } from './TableRow';
import PropTypes from 'prop-types';

export const Table = (props) => {
    const { tableHead, tableRow } = props;
    return (
        <table className="table table-striped table-condensed " >
            <thead>
            <tr>
               {tableHead.map( (rowItem, index) => {
                 return <TableRow key={index+1} rowItem={rowItem}/>
               })
               }
            </tr>
            </thead>
            <tbody>
            {tableRow}
            </tbody>
       </table>

    )
}

Table.propTypes = {
    tableHead:PropTypes.array.isRequired,
    tableRow:PropTypes.array,
};