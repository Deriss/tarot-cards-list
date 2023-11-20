import Button  from 'react-bootstrap/Button';

import { allTarotCards } from './data/cards';
import Accordion  from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './App.css'
function App(){

  return(
  <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<Cards />} />
      </Routes>
    </div>);
}
function Home(){
  
  return ( <div className = 'home'>
    <div id='div-titulo'> <h1>Tarot da Juliana</h1></div>
    <Link to="/cards" id='button-list' className="btn btn-light btn-lg">Abrir Lista de Cartas</Link>
  
  </div>
)
}
function Cards() {
  const [searchText, setSearchText] = useState('');
  const [allCards, setAllCards] = useState(allTarotCards);
  function onSeachTextChange(e){
    setSearchText(e.target.value)
  }
  function onInvertidaChange(id){
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex(card =>card.id === id);
    updatedCards[cardIndex].invertida = !updatedCards[cardIndex].invertida;
    setAllCards(updatedCards);
  }
  function onClearButtonClick(){
    setSearchText("")
  }
  return (
    <div className="BackgroundList">
    <h1>Tarot da Juliana</h1>
    <h2>Lista de Cartas</h2>
    
      <InputGroup className='search-bar'>
        <InputGroup.Text id='input-text'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </InputGroup.Text>

        <Form.Control
            placeholder="Escreve aqui o nome da carta"
          
            value = {searchText}
            onChange = {onSeachTextChange}
          />
        <Button variant='secondary' onClick={onClearButtonClick}>Limpar</Button>
      </InputGroup>
      
      <br/>  

      <Accordion  className='cards'>
        {allCards
        .filter(item=>item.nome ===searchText?item:item.nome.toLowerCase().includes(searchText.toLowerCase()))
          /*
        .filter(item=>item.nome.includes(searchText)).
      */
              
        .map(item=>{return (
    
        <Accordion.Item eventKey={item.id}>
          <Accordion.Header>{item.nome}</Accordion.Header>
          <Accordion.Body>
                  
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Está invertida?"
              checked={item.invertida}
              onChange={()=>onInvertidaChange(item.id)}
            />  
            <br/>
            <center><b>{item.representa}</b></center>
            <br/>
            <b>Descrição {item.invertida?'Invertida':'Normal'} </b>
            <p>{item.invertida? item.desc_invertida: item.descricao}</p>
          
            
          </Accordion.Body>
        </Accordion.Item>)})}
      </Accordion>
   
    </div>
  );
}

export default App;
