import React from 'react';
import PropTypes from 'prop-types';

export const ChangeInputForm = ( props ) => {
    const { toggleForm, repoName, handleRepoChange, handleSubmit } = props;
    let element = null;

    if(toggleForm) {
      element = (
            <div className='row'>
             <div className='col-md-7'>
              <input type='text' className='form-control' value={repoName}  placeholder='Repository name' onChange={handleRepoChange} required/>
             </div>
             <div className='col-md-2'>
              <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Search</button>
             </div>
           </div>  
        )
    }
    return element;
}    

ChangeInputForm.propTypes = {
    repoName:PropTypes.string.isRequired,
    toggleForm:PropTypes.bool.isRequired,
    handleRepoChange:PropTypes.func.isRequired, 
    handleSubmit:PropTypes.func.isRequired,
};