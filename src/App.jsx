import {useState} from "react";
 import { Button, Container, Alert, Form } from 'react-bootstrap'
import "./App.css";
import React from 'react'


// navbar
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">TKH</h1>
      <div className="menu-link">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    
    </div>
  );
}

// SideBar
function SideBar() {
  return (
    <div className="sidebar">
      <a href="">portfolio</a>
      <a href="">blog</a>
     
    </div>
  );
}

// layout
function Layout(props) {
  return (
    <div className="layout">
      {props.children}
    </div>
  );
}

function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("");
    console.log(typeof (username), typeof (password))

    if(username == "user123" && password == "password123"){
      console.log("logged in");
      props.setLoginUser(true)
      setError(false);
    } else {
      setError(true);
    }
  }


  return(
    <Container className="container">
      {error ?
        <Alert variant="danger">
          That was the wrong username / password
        </Alert> : <h1 className="align-self-center welcome text-primary fw-bold fs-2 mb-4">Welcome to the App!</h1>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">Username:</Form.Label>
          <Form.Control
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Input username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="d-flex text-start">Password:</Form.Label>
          <Form.Control
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Input password" />
        </Form.Group>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <input onChange={(e) => setPassword(e.target.value)} type="text" /> */}
        <div className="d-grid gap-2">
          <Button type="submit" value="Login">Submit</Button>
        </div>
      </Form>
    </Container>


  )
}


function Signup(props) {

  function logIn(e) {
    // console.log("loggedin")
    e.preventDefault()
    props.setLoginUser(true)

  }

  return (
    <Container className="container">
      <h1 className="text-primary fs-1 fw-bold mb-4" >Sign Up</h1>
      <Form onSubmit={logIn}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">Email</Form.Label>
          <Form.Control
            name="email"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="d-flex text-start">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
          />
        </Form.Group>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <input onChange={(e) => setPassword(e.target.value)} type="text" /> */}
        <div className="d-grid gap-2">
          <Button className="submit" type="submit" value="Login">Sign Up</Button>
        </div>
      </Form>
    </Container >
  )
  //   <div>
  //     {error ? <div>That was the wrong username and/or password</div> : <div>Welcome to the app</div>}
  //     <form onSubmit={handleLogin}>
  //       <input onChange={(e) => setUsername(e.target.value)} type="text" name="userName" />
  //       <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
  //       <input type="submit" value="Login" />
  //     </form>
  //   </div>
  // )
}

function App() {
  const [ isUserLoggedIn, setUserLoggedIn ] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function changelogin(){
    setShowLogin(!showLogin);
  }

  return (
    <div className="app">
      {
        isUserLoggedIn ?
        <>
          <div className="navbar-box">
            <Navbar />
          </div>
          <div className="main-box">
            <SideBar />
            <Layout>
              <h1>Hello world</h1>
            </Layout>
          </div>
        </>
        :
        <>
        {
          showLogin ?
          <Login setLoginUser={setUserLoggedIn} />
          :
        <Login setLoginUser={setUserLoggedIn} />
      }
      </>
}
<div className="bottom-signup">
  {!isUserLoggedIn &&
          <p>{showLogin ? "Already" : "Don't"} have an account? <Button className="signup-btn ms-2" onClick={() => changeLogin()} type="submit" value="Login"> {showLogin ? "Login" : "Sign Up"}</Button></p>}
</div>
    </div>
  );
}

export default App;