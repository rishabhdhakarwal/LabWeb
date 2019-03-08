import React, { Component } from 'react'
import { Navbar, Nav, NavItem, FormControl, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {Icon, IconButton} from 'evergreen-ui';
import "w3-css/w3.css";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'



class App extends Component {
  render() {
    return (
    
      <div className="demo-big-content" >
      <Layout>
        <Header className="header-color " title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">LabelLab</Link>} >
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/about">About</Link>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                </Navigation>
            </Header>
       

        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">LabelLab</Link>}>
            <Navigation>

              <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/about">About</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>



    );
  }
}

export default App;



