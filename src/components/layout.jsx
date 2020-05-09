import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
//import Box from '@material-ui/core/Box';
// import Home from './components/home';
// import Charts from './components/charts';
// import Table from './components/table';
import Navbar from '../components/navbar';

class Layout extends Component {
    render(){
        return(
          <div className='root'>
              <Navbar/>
              <Container maxWidth='lg' component='main'>
                    {this.props.children}
              </Container>
              {/* <Box mt={5}>
                <Footer></Footer>
              </Box> */}
          </div>
        )
    }
}
export default Layout;