import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

class NaviBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <div className="App-nav">
                <Navbar dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-text" href="#home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="#skill">Skill</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="#project">Project</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NaviBar;