
import React from 'react';
import PropTypes from 'prop-types';

import { HandleInputForm } from '../components/HandleInputForm';
import { UserRepos } from '../components/UserRepos';
import { ChangeInputForm } from '../components/ChangeInputForm';
import { IssueList  } from '../components/IssueList';
import { HandleError } from '../components/HandleError';

export const HandleRepoIssues = (props) => {
    const { handleToggleForm, userName, repoName,  issues, toggleForm, 
        handleUserChange, handleRepoChange, handleSubmit, handleAutoComplete} = props;
       
    return (
        <div className='App'>
          <div className='container'>
            <HandleInputForm handleToggleForm={handleToggleForm}/>
            <div className='row'>
                <div className='col-md-3'>
                   <input type='text' className='form-control' value={userName} placeholder='User name' onChange={handleUserChange} required />
                </div>
                <div className='col-md-9'>
                   <ChangeInputForm  {...{repoName, toggleForm}} handleRepoChange={handleRepoChange} handleSubmit={ handleSubmit}/>
                   <UserRepos {...props} handleAutoComplete={ handleAutoComplete}/>
                </div>
            </div>
            { issues.length > 0 ? <IssueList issues={issues}/> : <HandleError {...props}/>} 
          </div>
        </div> 
      )
}    

HandleRepoIssues.propTypes = {
    repos: PropTypes.array.isRequired,
    issues:PropTypes.array.isRequired,
    repoName:PropTypes.string.isRequired,
    userName:PropTypes.string.isRequired,
    isReposLoaded:PropTypes.bool.isRequired,
    toggleForm:PropTypes.bool.isRequired,
    handleAutoComplete:PropTypes.func.isRequired, 
    handleRepoChange:PropTypes.func.isRequired, 
    handleSubmit:PropTypes.func.isRequired,
    handleUserChange:PropTypes.func.isRequired,
    handleToggleForm:PropTypes.func.isRequired,
};