import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    center: {
      lat:41.0082,lng: 28.9784
    },
    markers: [],
    path:[]

  }

  fetchData = e => {
    console.log()
  }
 componentDidMount() {
   console.log(this.props.match.params);
   const map = new window.google.maps.Map(document.getElementById('map'),{
     center: {
       lat:41.0082,lng: 28.9784
     },
     zoom:8,
     disableDefaultUI:true
   })
 }

  render() {
    return (
      <div style = {{width:'100vw',height:'100vh'}} id = "map">

      </div>
    )
  }
}


export default App;
