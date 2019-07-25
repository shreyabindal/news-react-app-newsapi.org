import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';

class NavBar extends Component {
    state = {  }

    render() { 
        const appNavbar = ( 
            <Navbar fixed="top"  bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Button onClick=>News</Navbar.Button> */}
            <Navbar.Brand>News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Button onClick={()=>this.props.toLink("top-headlines", "country", "in")} variant="dark">Top Headlines</Button>
                <Button onClick={()=>this.props.toLink("everything", "q", "politics")} variant="dark">Politics</Button>
                <Button onClick={()=>this.props.toLink("everything", "q", "sports")} variant="dark">Sports</Button>
                <Button onClick={()=>this.props.toLink("everything", "q", "entertainment")} variant="dark">Entertainment</Button>
                <Button onClick={()=>this.props.toLink("everything", "q", "business")} variant="dark">Business</Button>
                <Button onClick={()=>this.props.toLink("everything", "q", "technology")} variant="dark">Technology</Button>
                {/* <Button onClick={()=>this.props.toLink("everything", "q", "trending")} variant="dark">Trending</Button> */}
                {/* <Button onClick={()=>this.props.toLink("everything", "q", "education")} variant="dark">Education</Button> */}

                <NavDropdown title="Social Media" id="basic-nav-dropdown" >
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "q", "twitter")}   variant="light" block>Twitter</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "q", "facebook")}  variant="light" block>Facebook</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "q", "instagram")}  variant="light" block>Instagram</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">    
                         <Button onClick={()=>this.props.toLink("everything", "q", "tiktok")}  variant="light" block>Tik-Tok</Button>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>

                <NavDropdown title="Publishers" id="basic-nav-dropdown" >
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "sources", "abc-news")}  variant="light" block>
                            ABC-News
                        </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "sources", "the-times-of-india")}  variant="light" block>
                            Times of India
                        </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "sources", "bbc-news")}  variant="light" block>
                            BBC News
                        </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("everything", "sources", "google-news")}  variant="light" block>
                            Google News
                        </Button>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>

                <NavDropdown title="Countries" id="basic-nav-dropdown" >
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("top-headlines", "country", "in")}  variant="light" block>
                            India
                        </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("top-headlines", "country", "us")}  variant="light" block>
                            US
                        </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="m-0 p-0">
                        <Button onClick={()=>this.props.toLink("top-headlines", "country", "au")}  variant="light" block>
                            Australia
                        </Button>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" id="search" className="mr-sm-2" />
                <Button variant="outline-success" onClick={this.props.onSearch} >Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
         );
        return (
            <div>
              {appNavbar}
            </div>
        );
    }
}
 
export default NavBar;