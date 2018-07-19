import React from 'react';
import {  Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../App.css';
import { Table } from './Table';


export const IssueList = (props) => {
 
  const {issues } = props;
  let arr = ['#', 'Number', 'Title', 'created_at' ];

  let tableMargin = {
    marginTop: '50px'
  }

  let rows = issues.map((item,index) => {
              return (
                <tr key={index+1}>
                  <th scope="row">{index+1}</th>
                  <td><Link to={`/issues/${item.number}`}> {item.number} </Link></td>
                  <td>{item.title}</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                </tr>
              )
        });

  return (
      <div style={tableMargin}>
        <Table tableHead={arr} tableRow={rows}/>   
      </div>  
  );
}

IssueList.propTypes = {
  issues:PropTypes.array.isRequired,
};