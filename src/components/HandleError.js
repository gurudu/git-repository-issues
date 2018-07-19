import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

export const HandleError = ( props ) => {
      const { error, isIssuesLoaded, isInitialErrorMessage, repos, repoName, message } = props;
      let element = null;
      let repoList=[];

      if(repos){
        repoList = repos.map(item => item.name );
      }
  
     if(message) {
       return <div className='messageMargin error'>Please fill the all the fields</div>;
     } else if(error) {
         return <div className='messageMargin error' > {error.message} </div>

     } else if ( repoList.indexOf(repoName) === -1 && repoList.length>0 && isInitialErrorMessage ) {
        if(repoName === ''){
          return null;
        } else if(!isIssuesLoaded) {
          return <div className='messageMargin error' >This is not a valid repo name</div>;
        } else {
          return null;
        }

     } else if(isIssuesLoaded) {
            return <div className='messageMargin message' >There are no issues for the repo</div>
  
     } else if( !isIssuesLoaded && isInitialErrorMessage ) {
        return <div className='messageMargin load'>Loading...</div>

     } else {
       return element;
     }
}    

HandleError.propTypes = {
  repos: PropTypes.array.isRequired,
  repoName:PropTypes.string.isRequired,
  isIssuesLoaded:PropTypes.bool.isRequired,
  isInitialErrorMessage:PropTypes.bool,
};
