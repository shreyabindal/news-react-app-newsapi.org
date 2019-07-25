import React, { Component } from 'react';
import './App.css';
import Feed  from './components/feed.js';
import NavBar  from './components/Navbar.js'
import { Container, Row } from 'react-bootstrap';


class App extends Component {
    state = { 
      articles: []
    }

  componentDidMount = ()=>{
    
    this.changeLink("top-headlines", "country", "us");
  }

  changeLink = (type, key, value) => {
    if(!value){
      value = key;
      key = "q"
    }
    const url = "https://newsapi.org/v2/" + type + "?" + key + "=" + value + "&apiKey=12bc8586f2e04d10a1338f8d1eeda6e0"
    console.log(url)
      fetch(url)
      .then((response) => response.json())
      .catch((error) => this.setState({
          articles: []
      }))
      .then((data) => {
          this.setState( {
              articles: data.articles
          } );
          console.log(this.state.articles)
      })
      .catch((error)=>{
        this.setState( {
          articles: []
      });
      })
  }

    handleSearch = () => {
      const newItem = document.getElementById("search");
      this.changeLink("everything", newItem.value)
    }

    handleHomeClick = () =>{
      this.changeLink("top-headlines", "country", "in")
    }


  render(){
    if(this.state.articles == []){
      return (<Container>Internet Not Working</Container>);
    }
    return (
      <Container>
        <Row><NavBar onSearch={this.handleSearch} toHome={this.handleHomeClick} toLink={this.changeLink}/></Row><br/><br/><br/>
        <Feed articles={this.state.articles}/>
      </Container>
    );
  }
    
}

export default App;
