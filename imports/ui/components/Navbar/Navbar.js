import React from 'react';
import { Menu, Button, Dropdown, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import './Navbar.scss'
import BadgeIndicator from './components/BadgeIndicator/BadgeIndicator';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

class Navbar extends TrackerReact(React.Component) {

  handleMenuClick = (e) => {
    switch (e.key) {
      case "1": this.props.history.push('/profile'); break;
      case "2": this.props.history.push('/admin'); break;
      case "4": this.props.history.push('/advertiser'); break;
      case "3": Meteor.logout((e) => this.props.history.push('/login')); break;
    }
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="profile" />
          Profile
        </Menu.Item>
        {
          Meteor.users.findOne({ _id: Meteor.userId() }) && Meteor.users.findOne({ _id: Meteor.userId() }).emails !== undefined ?
            Meteor.users.findOne({ _id: Meteor.userId() }).emails[0].address === "pgutzu@gmail.com" && <Menu.Item key="2">
              <Icon type="star" />
              Admin panel
        </Menu.Item>
            :
            null
        }
        {
          Meteor.users.findOne({ _id: Meteor.userId() }) && Meteor.users.findOne({ _id: Meteor.userId() }).emails !== undefined ?
            Meteor.users.findOne({ _id: Meteor.userId() }).emails[0].address === "pgutzu11@gmail.com" && <Menu.Item key="4">
              <Icon type="star" />
              Advertiser panel
        </Menu.Item>
            :
            null
        }
        <Menu.Item key="3">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </Menu>
    );

    return (
      <>
        <NavLink to={"/users"}>
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
                      <BadgeIndicator />
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
          </Menu.Item>
        </Menu>
      </>
    );
  }
}


export default Navbar;
