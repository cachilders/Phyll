import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import SearchBar from '../components/searchBar.jsx';
import PlantFacts from '../components/plantFacts.jsx';
import PlantForm from '../components/plantForm.jsx';



export default class AddPlant extends React.Component {
  constructor() {
    super();
  }

  render() {
    let plantFacts = this.props.plantFacts[0];
    
    if (plantFacts){

      return (

        <div className="row content">
          <div className="content-top column container-fluid">
            <div className="card">
              <div className="card-header">
                Add { plantFacts.plant_name } to your collection
              </div>
              <div className="card-block container-fluid">
                <PlantForm { ...this.props } />
              </div>
            </div>
          </div>
        </div>

      );
    } else {
      return (

        <div></div>

      );
    }
  }

  // _fetchPlant(plant){
  //   //console.log(plant, "inside addMyPlant");
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/plantFacts',
  //     json: true,
  //     contentType: 'application/json; charset=utf-8',
  //     data: JSON.stringify({plant:plant}),
  //     success: (plantFacts) => {
  //       if(plantFacts.length!==0){
  //         this.setState({plantFacts:plantFacts[0]});
  //       }
  //     }
  //   });
  // }
}
