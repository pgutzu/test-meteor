import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Dropdown, Icon, Badge } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import './Navbar.scss'





class Navbar extends React.Component {

  handleMenuClick = (e) => {
    switch (e.key) {
      case "1": this.props.history.push('/profile'); break;
      case "2": Meteor.logout((e) => this.props.history.push('/login')); break;
    }
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="profile" />
          Profile
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </Menu>
    );
    return (
      <>

        <NavLink to={"/"}>
          <div className="logo"  >
          </div>
        </NavLink>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item className="menuItem" >
            {
              (Meteor.user() !== undefined) && (Meteor.user() !== null) ?
                <div id="components-dropdown-demo-dropdown-button">
                  <Dropdown overlay={menu} >
                    <a className="ant-dropdown-link" href="#">
                      <Badge count={5}>
                        <Icon type="user" />
                        {Meteor.user().username}
                      </Badge>
                    </a>
                  </Dropdown>
                </div>
                :
                < NavLink to="/auth">
                  <Button>
                    Login
                    </Button>
                </NavLink>
            }

            {/* <div >
          {
            loggedIn ?
              <NavLink to="/auth">
                <Button>
                  Login
                  </Button>
              </NavLink>
              :
              <NavLink to="/login" onClick={() => Meteor.logout()}>
                <Button>
                  Logout
                    </Button>
              </NavLink>
          }
        </div> */}
          </Menu.Item>
        </Menu>
      </>
    );
  }
}


export default Navbar;
