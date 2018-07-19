import React from 'react';

import PropTypes from 'prop-types';
import { AutoCompleteRepos } from './AutoCompleteRepos';

export const UserRepos = ( props ) => {
    const { repos, repoName, handleAutoComplete, isReposLoaded, toggleForm  } = props;
    let element = null;

    if(isReposLoaded && !toggleForm && repos.length > 0) {
      element = <AutoCompleteRepos {...{repos,repoName }} handleAutoComplete={handleAutoComplete} />
    }    

    return element;
}

UserRepos.propTypes = {
  repos: PropTypes.array.isRequired,
  repoName:PropTypes.string.isRequired,
  isReposLoaded:PropTypes.bool.isRequired,
  toggleForm:PropTypes.bool.isRequired,
  handleAutoComplete:PropTypes.func.isRequired, 
};