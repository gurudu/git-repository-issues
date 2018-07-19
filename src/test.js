
/**
 * store in components folder
 * 
 * create separte component
 *
  autoCompleteRepos = () => {
    console.log(this.state.repos, 'in userRepos');
    return ( <div className='row'>
            <input type='text' className='form-control' list='repoList' value={this.state.repoName} placeholder='Select a repository' onChange={this.handleAutoComplete}/>
              <datalist id='repoList'> 
              {this.state.repos.map((item, index) => <option key={index+1} value={item.name} /> )}
              </datalist>
            </div>
    );  
  }
*/
  /**
 * create separte component
 
  changeForm = (isToggle) => {
     if(isToggle){
       return(
         <div className='row'>
          <div className='col-md-7'>
           <input type='text' className='form-control' value={this.state.repoName}  placeholder='Repository name' onChange={this.handleRepoChange} required/>
          </div>
          <div className='col-md-2'>
           <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Search</button>
          </div>
        </div>  
       )
     }else{
        return null;
     }
  
  }
*/
  /**
 * create separte component
 *
.messageMargin {
  margin-top: '10px';
}

.message {
  color: blue;
}

.error {
  color: red;
}

.load {
  color: green;
}
  handleError = (message, error, isLoaded) => {
     let element = null;
     if(message) {
       return message
     } else if(error) {
         return <div style={{ color: 'red'}}> {error.message} </div>
     } else if(this.repoList.indexOf(this.state.repoName) === -1 && this.repoList.length>0 && this.state.isInitialErrorMessage){
        if(this.state.repoName === ''){
          return null;
        } 
       return <div style={{color: 'blue'}} >This is not a valid repo name</div>
     }
      else if(isLoaded) {
       return <div style={{color: 'blue'}} >There are no isuues for the repo</div>
     } else if(!isLoaded && this.state.isInitialErrorMessage) {
        return <div style={{ color: 'green'}}>Loading...</div>
     }else {
       return element;
     }
  }
*/