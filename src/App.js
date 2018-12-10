import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faStickyNote } from '@fortawesome/free-solid-svg-icons'


import Main from './components/pages/main/Main';
import Appbody from './components/pages/post/appbody/AppBody';
import ShowPost from './components/pages/post/showpost/ShowPost';
import Nav from './components/shared/nav/Nav';

library.add(faHome, faStickyNote)


const theme = createMuiTheme({ "palette": { "common": { "black": "#000", "white": "rgba(255, 255, 255, 1)" }, "background": { "paper": "#fff", "default": "#fafafa" }, "primary": { "light": "rgba(77, 171, 245, 1)", "main": "rgba(33, 150, 243, 1)", "dark": "rgba(23, 105, 170, 1)", "contrastText": "#fff" }, "secondary": { "light": "rgba(77, 171, 245, 1)", "main": "rgba(255, 255, 255, 1)", "dark": "rgba(23, 105, 170, 1)", "contrastText": "rgba(23, 105, 170, 1)" }, "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" }, "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)" } } })
// const theme = createMuiTheme({"palette":{"common":{"black":"#000","white":"rgba(255, 255, 255, 1)"},"background":{"paper":"rgba(255, 245, 245, 1)","default":"rgba(255, 243, 230, 1)"},"primary":{"light":"rgba(255, 255, 255, 1)","main":"rgba(60, 60, 60, 1)","dark":"rgba(0, 0, 0, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(255, 255, 255, 1)","main":"rgba(255, 255, 255, 1)","dark":"rgba(255, 255, 255, 1)","contrastText":"rgba(255, 255, 255, 1)"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(255, 255, 255, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event, input) => {
    this.setState({
      page: input
    })
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename="/WhatTimeIsItNow-Frontend">
          <div>
            <Nav page={this.state.page} handle={this.handleChange}/>
            <Route exact path="/" component={Main}/>
            <Switch >
              <Route path="/post/:id" component={ShowPost}/>
              <Route path="/post" component={Appbody} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App;