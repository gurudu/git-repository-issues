
import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import { Table } from './Table';


const goBack = (props) => {
    props.history.goBack();
}

const render = (props, issue ) => {   
    if(issue !== null ){
        let arr = ['#', 'UserName', 'Avatar', 'GitHub' ];
        let element = (  
            <div className='App'> 
                <div className='container'>
                    <h1 className='text-primary'>Issue details: </h1>
                 <Table tableHead={arr} tableRow={issue}/>
                 <button type="button" className='btn btn-primary float-right' onClick={() => goBack(props)}>Go Back</button>
             </div>
            </div> 
         )
        return element;
    } 
   return issue;
}

export const IssueItem = (props) => {
    const {issues, match } = props;
    let issue = null;
    if(issues.length > 0){
        const issueDetails = issues.filter(item => {
            return item.number === Number(match.params.id)
         });
         const { login, avatar_url, html_url } = issueDetails[0].user;
          issue = (
                <tr>
                 <th scope="row">{1}</th>
                 <td> {login}</td>
                 <td> <img src={`${avatar_url}`} className="rounded-circle" alt="avatar" width="120" height="100"/> </td>
                 <td><a href={`${html_url}`}  target="_blank" rel="noopener noreferrer" className="badge badge-primary">GitHub</a></td>
                </tr>
             )
         } 
    return (
          render(props, issue)
        );
  }
  
IssueItem.propTypes = {
    issues:PropTypes.array.isRequired,
    match:PropTypes.object.isRequired,
};