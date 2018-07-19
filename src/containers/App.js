import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../App.css';

import { IssueItem } from '../components/IssueItem';
import { HandleRepoIssues } from '../components/HandleRepoIssues';
import ErrorBoundary from './ErrorBoundary';


class App extends Component {
  state = {
      userName: '',
      repoName: '',
      repos: [],
      issues: [],
      error: null,
      isReposLoaded: false,
      isIssuesLoaded: false,
      message:'',
      isInitialErrorMessage: false,
      toggleForm: true,
  }

  constructor(props){
    super(props);
    this.setAuth = 'client_id=Iv1.0cf58121e6438895&client_secret=456ebe652b5d7d8a8c39d0dbc51bfcedfbf889ad';
  }

  handleUserChange = (e) => {
    this.setState({
      userName: e.target.value,
    }, () => {
      if(!this.state.toggleForm){
        this.setState({
          repoName:'',
          issues:[],
        });
        this.fetchRepos(this.state.userName);
      }
    });
  }

  handleRepoChange = (e) => {
    this.setState({
      repoName: e.target.value,
    })
  }

  handleToggleForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm,
      issues:[],
      message:'',
      error:null,
      userName: '',
      repoName: '',
      isIssuesLoaded: false,
      isReposLoaded: false,
      isInitialErrorMessage:false,
    })
  }

  handleIssues = () => {
    let { repos, repoName, userName } = this.state;
    let repoList = [];
    repoList = repos.map(item => item.name );
     if(repoList.indexOf(repoName) !== -1 ){
        this.setState({
          error:null,
          message:'',
          issues:[],
          isInitialErrorMessage:true,
        })
        this.fetchIssues( userName, repoName);
    } else{
      this.setState({
        issues:[],
        isIssuesLoaded: false,
      });
    }
  }

  handleAutoComplete = (e) => {
    this.setState({
      repoName: e.target.value,
    }, () => {
     this.handleIssues();
    });
  }

  fetchIssues = (user, repoName) => {
    let url = `https://api.github.com/repos/${user}/${repoName}/issues?${this.setAuth}`;
    axios.get(url)
      .then((response) => {
          this.setState({
            issues: [...response.data],
            isIssuesLoaded: true,
          });
        })
         .catch((error) => {
          this.setState({
            isIssuesLoaded: false,
            error
          });
        }
      )
  }

  fetchRepos = (user) => {
    let url = `https://api.github.com/users/${user}/repos?${this.setAuth}`;
    axios.get(url);
    axios.get(url)
      .then((response) => {
          this.setState({ 
            repos: [...response.data],
            isReposLoaded:true,
            issues:[],
          });
        })
        .catch((error) => {
          this.setState({
            isReposLoaded: false,
            error,
            repos:[],
            issues:[],
          });
        }
      ) 
  }

  handleSubmit = () => {
    const { userName, repoName } = this.state;
     if(userName && repoName){
      this.setState({
        error:null,
        message:'',
        issues:[],
        isInitialErrorMessage:true,
      });
      this.fetchIssues( userName, repoName);
     } else {
      this.setState({
        message: 'Please fill the all the fields',
        issues:[],
      })
     }
  }

  render() { 
    const { issues } = this.state;
    return (
      <Router>
        <div>
          <ErrorBoundary>
            <Route exact path='/'  render={ () => 
              <HandleRepoIssues {...this.state} 
                handleUserChange={this.handleUserChange} 
                handleRepoChange={this.handleRepoChange}
                handleSubmit={this.handleSubmit} 
                handleAutoComplete={this.handleAutoComplete} 
                handleToggleForm={this.handleToggleForm}
              />} 
            />
          </ErrorBoundary>
          <ErrorBoundary>   
            <Route path="/issues/:id" render={(props) =>  <IssueItem {...props} issues={issues} /> }/>
          </ErrorBoundary>  
        </div>
      </Router> 
    )
  } 
}

export default App;
