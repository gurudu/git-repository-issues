
import React from 'react';

import PropTypes from 'prop-types';

export const AutoCompleteRepos = (props) => {
    const { repos, repoName, handleAutoComplete } = props;
    return (
             <div className='row'>
             <div className='col-md-7'>
              <input type='text' className='form-control' list='repoList' value={repoName} placeholder='Select a repository' onChange={handleAutoComplete}/>
              </div>
              <datalist id='repoList'> 
                {repos.map((item, index) => <option key={index+1} value={item.name} /> )}
              </datalist>
            </div>
    );
  }

AutoCompleteRepos.propTypes = {
    repos: PropTypes.array.isRequired,
    repoName:PropTypes.string.isRequired,
    handleAutoComplete:PropTypes.func.isRequired,
  };
