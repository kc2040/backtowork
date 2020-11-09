import React, { useContext, useReducer } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './Home';
import NavBar from '../src/nav/NavBar';
import cartContext from './context/cartContext';
import cartReducer from './store/cartReducer';
import Summary from './components/Summary';
//import IndexForm from './forms/IndexFormdelete';
import RTWForm from './forms/RTWForm';
import Thankyou from './components/Thankyou';
import Footer from './nav/Footer';



function App() {
   const initialState = useContext(cartContext);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
  <>
  <cartContext.Provider value={{state, dispatch}} >
            
      <Route exact path='/' component={HomePage} />
      <Route
          path={'/(.+)'}
          render={() => (
        
            <Container className='main'>
                         
              <NavBar></NavBar>
              {/* <Route exact path='/index' component={IndexForm} /> */}
              <Route exact path='/rtwform' component={RTWForm} />
              <Route exact path='/summary' component={Summary} />
              <Route exact path='/thankyou' component={Thankyou} />
            
              <Footer></Footer>
           
              
            </Container>


          
          )}
      />
      </cartContext.Provider>

 
   </>
  )

}

export default App;
