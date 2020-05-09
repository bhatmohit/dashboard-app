import React, { Component } from 'react';
import './App.css';
//import '../node_modules/react-vis/dist/style.css';
//import {XYPlot, LineSeries, YAxis, XAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';

import { BrowserRouter as Router, Link} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import Home from './components/home';
import Charts from './components/charts';
//import Table from './components/table';
import Layout from './components/layout';

//const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
      results: [],
  };
}
componentDidMount() {
  fetch("https://bhatmohit.github.io/dashboard-app/data.json")
      .then(response => {
          if (response.ok) {
              return  response.json()
          }
          else {
              throw new Error ('something went wrong')
          }
      })
      .then(response => this.setState({
          results: response.results.filter((r)=>{
                  return r.name === 'JavaScript';
              })
          })
      )}
  render() {
    const {results} = this.state;
    console.log(results);
//     const data = [
//       {x: 0, y: 8},
//       {x: 1, y: 5},
//       {x: 2, y: 4},
//       {x: 3, y: 9},
//       {x: 4, y: 1},
//       {x: 5, y: 7},
//       {x: 6, y: 6},
//       {x: 7, y: 3},
//       {x: 8, y: 2},
//       {x: 9, y: 0}
//     ];
//     return (
//       <div className="App">
//       <XYPlot height={300} width= {300}>
//   <VerticalGridLines />
//   <HorizontalGridLines />
//   <XAxis />
//   <YAxis />
//   <LineSeries data={data} />
// </XYPlot>
//       </div>
return(
  <Router> 
      {/* <div>
      <Link to="/">Home</Link>
      <Link to="/charts">Charts</Link>
      </div> */}
      <div>
       <Layout>
        {/* <Switch>    */}
       <Route exact path='/' ><Home/></Route>
       {/* <Route exact path='/charts' component={Charts}>Charts</Route> */}
       <Route exact path='/charts'><Charts data={results}/></Route>
       {/* <Route></Route> */}      
       {/* </Switch> */}
   </Layout>
   </div>
   </Router> 
  );
  }
}

export default App;
