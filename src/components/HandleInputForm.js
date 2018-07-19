
import React from 'react';
import PropTypes from 'prop-types';

export const HandleInputForm = (props) => {
    const { handleToggleForm } = props;
    return (
            <div className='row'>
               <div className='col-md-5'>
               <h1 className='App-title text-primary float-left'>List Issues of a GitHub Repository</h1>
               </div>
               <div className='col-md-3'>
               <button type="button" className='btn btn-secondary btn-md float-right alignButton' onClick={handleToggleForm}>Change Form</button>
               </div>
            </div>
    )
}    

HandleInputForm.propTypes = {
    handleToggleForm:PropTypes.func.isRequired, 
  };