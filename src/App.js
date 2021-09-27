
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Header/ItemListContainer';
import React from 'react';

/*class App extends React.Component {
    render(){
      return(
            
            <div className="App">
              <NavBar />
              <h1> Flor de Agua - Jardineria Facil </h1>
            </div>
      )
          
    };
  }*/

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1> Flor de Agua </h1>
      <ItemListContainer title="Shop"/>

    </div>
  );
}

export default App;
