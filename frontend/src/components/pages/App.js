
  
import React from "react"
import {Container} from "react-bootstrap";
import {Home} from "./Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (

      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}>
          <div className="w-100" style={{maxWidth:"100%"}}>
          <Router>
            
                  <Switch>
                      <Route exact path="/" component={Home}/>
              
                  </Switch>
          </Router>
          </div>
      </Container>

  )
}

export default App;