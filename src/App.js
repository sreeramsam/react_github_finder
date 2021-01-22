import React from 'react';
import Zoom from 'react-reveal/Zoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Input, Table, Navbar, Image, Form, FormGroup, Label, FormText, Link } from 'reactstrap';
import './App.css';
import githublogo from './GitHub-Mark-120px-plus.png';

function App() {
  
  var urlVal;
  const client_id = "6dccb81fdb4557d43877";
  const client_secret = "4e193c2e518a80a14b04cb5fea6b5334fc6e84c6";

  const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)

    const data = await api_call.json();

    return { data }
  };

  const showData = () => {
    var search1;
     search1 = document.getElementById("search").value;
    fetchUsers(search1).then((res) => {
      debugger;
      console.log(res);

      document.getElementById("1").append(` "Name" : ${res.data.login}`);
      document.getElementById("2").append(` "Public Repository" : ${res.data.public_repos}`);
      document.getElementById("3").innerHTML =  "Navigate to User Profile";
      document.getElementById("3a").href =  res.data.html_url;
      document.getElementById("resultimg").innerHTML =  `<img style= "height: 13rem" src="${res.data.avatar_url}"/>`;
       urlVal = res.data.url;
       console.log(urlVal);
    })
  };

  function search() {
    showData();
  }
  return (
    <div className="App">
      <Container>
        <Row className="pt-5">
          <Col md="12">
            <Zoom top>
              <img src={githublogo}></img>
            </Zoom>
            <h1 style={{ textAlign: "center" }}>GitHub Search User App</h1>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col md="12">

            <Col md="6 offset-md-3">
              <FormGroup>
                <Input type="text" name="search" id="search" placeholder="Search UserName" />
              </FormGroup>
              <FormGroup>
                <Button color="danger" id="button" onClick={search}>Search User</Button>
              </FormGroup>
            </Col>

          </Col>
        </Row>
        <Row className="pt-2">
           <Col md="12">
             <div id="resultimg"></div>
           </Col>
        </Row>
        <Row className="pt-3">
          <Col md="12">           
            <h2 id="1"></h2>
            <br></br>
            <h2 id="2"></h2>
            <br></br>
            <a href="" target="_blank" id="3a"><h2 id="3"></h2></a>           
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
