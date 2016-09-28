import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import Users from '../components/users.jsx';
import Search from '../components/searchBar.jsx';
import PlantFacts from '../components/plantFacts.jsx';
import UserInfo from '../components/userInfo.jsx';
import Login from '../components/login.jsx';
import Logout from '../components/logout.jsx';
import Map from '../components/map/index.jsx';
import Chatbot from '../components/chatbot.jsx';

require('../stylesheets/main.scss');
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: [],
      plants: [],
      _fetchPlant: this._fetchPlant,
      isLoggedIn: false,
      userName:'',
      userImg:''
    };
  }
  componentWillMount() {
    this._getPlants();
    this._getAdmin();
    this._getUser();
  }
  render() {
    return(
      <div className="container-fluid">
        <div className="row header">
          <div className="col-xs-12">
            <span className="title pull-sm-left text-nowrap"><i className="phyll-glyphs logo"></i>phyll.IO</span>
            <div className="pull-sm-right">

                <ul className="nav nav-inline text-sm-right"style={{padding: .2 + 'em'}}>
                  <li className="nav-item">
                    <a className="nav-link graff" href="#">About</a>
                  </li>
                  <Login />
                  <Logout logout={this._logout.bind(this)}/>
                </ul>
                <UserInfo userName={this.state.userName} userImg={this.state.userImg} isLoggedIn={this.state.isLoggedIn}/>

            </div>
          </div>
        </div>
        <div className="row search">
          <div className="col-xs-12 jumbotron">
            <Search className="form-control form-control-lg" plants={ this.state.plants } fetchPlant={ this.state._fetchPlant } dataToggle="modal" dataTarget="#plantModal"/>
          </div>
        </div>
        <div className="row content">
          <div className="content-1 col-md-6 col-lg-5 col-xl-4">
            <Users users={ this.state.admin }/>
          </div>
<<<<<<< 28376cf017ece1cbf036a394253fa3a2787d6de8
<<<<<<< d60583fa159e54331b473686823e8c6ebc5e8c14
          <div className="content-2 col-md-6">
            <div>
              <Map/>
            </div>
<<<<<<< d48f9229a4c0a4ebac7ee3ce0844a3dea5c6ac30
            <h1>More content</h1>
            <p>Lorem ipsum</p>
            <Chatbot userName={this.state.userName}/>
=======
=======
=======
>>>>>>> [style] Tighten grid behavior
          <div className="content-2 col-md-6 col-lg-7 col-xl-8">
            <h1>More content</h1>
            <p>Lorem ipsum</p>
>>>>>>> [style] Tighten grid behavior
>>>>>>> [style] Tighten grid behavior
          </div>
        </div>
        <div className="row footer">
          <div className="col-xs-12">
            <h1>Footer</h1>
          </div>
        </div>
      </div>
    );
  }
  _getPlants() {
    $.ajax({
      method: 'GET',
      url: 'api/plantFacts',
      success: (plants) => {
        this.setState({ plants });
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }
  _getAdmin() {
    $.ajax({
      method: 'GET',
      url: 'api/admin',
      success: (admin) => {
        this.setState({ admin });
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }
  _fetchPlant(plant){
    $.ajax({
      method: 'POST',
      url: 'api/plantFacts',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ plant:plant }),
      success: (plantFacts) => {
        if(plantFacts.length!==0){
          render(
            <PlantFacts plantFacts={plantFacts[0]} />,
            document.getElementById('plantFact')
          );
        }
      }
    });
  }
  _getUser() {
    $.ajax({
      method: 'GET',
      url: 'api/auth/loggedin',
      success: (userInfo) => {
        if(userInfo){
          this.setState({userName: userInfo.name});
          this.setState({userImg: userInfo.img});
          this.setState({isLoggedIn:!this.state.isLoggedIn});
        }
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }
  _logout() {
    $.ajax({
      method: 'GET',
      url: 'api/auth/logout',
      success: (data) => {
        this.setState({isLoggedIn:!this.state.isLoggedIn});
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }
}
