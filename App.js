import React from 'react';
import './App.css';
import HeaderComponents from './components/HeaderComponents';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Login from './components/Login';
import AssetComponent from './components/AssetComponent';
import CreateAssetComponent from './components/CreateAssetComponent';



function App() {
  return (
<div>
<Router>
      <HeaderComponents/>
        <div className="container">
            <Switch> 
                  <Route path = "/" exact component = {AssetComponent}></Route>
                  <Route path = "/asset" component = {AssetComponent}></Route>
                  <Route path = "/add-assets" component = {CreateAssetComponent}></Route>
                
            </Switch>
        </div>
</Router>
</div>
      
   
  );
}

export default App;
