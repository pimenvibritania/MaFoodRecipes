import React, {useEffect,  useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl , Jumbotron} from 'react-bootstrap';
import Reciepe from './Reciepe'


const App = () => {

  const APP_ID = "8758e872";
  const APP_KEY = "661cec41d35bddc11a5fa5740e9103f1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getReciepes();
  }, [query]);

  const getReciepes = async () => {
    const response  = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);

    console.log(data.hits)
    
  }

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">MaFood Recipe's</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline onSubmit={getSearch} >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={updateSearch} />
          <Button variant="outline-info" type="submit" >Search</Button>
        </Form>
      </Navbar>
      <br/>

      <Jumbotron className="jumbo">

      {recipes.length > 0 ? 
        recipes.map(recipe=> (

          <Reciepe 
            className="recipe"
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        )) : <h2 className="ha2">Reciepe Not Found</h2>
      }

        
      </Jumbotron>


    </div>
  )

}

export default App;
