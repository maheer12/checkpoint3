import logo from './logo.svg';
import './App.css';
import react from 'react' ; 
import {BrowserRouter as Router , Route }from ' react-router-dom'
import home from './home'
import about from './about'
import front from'./layout/front'
import back from'./layout/back'

const AppRoute = ({component : Component,layout:layout,...rest})=> (
  <Route{...rest}render = {props =>(
  <layout> <component {...props}></component> </layout>)}></Route>

function App() {
  return (

    <Router>
      <AppRoute path ="/" exact layout={front} Component={home} />
      <AppRoute path ="/about" layout={back} Component={about} />
      </Router>
    
  );
}

export default App;
