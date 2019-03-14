import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import {Image} from 'react-native'
import Upcoming from './Lists/Upcoming'
import Popular from './Lists/Popular'
import Toprated from './Lists/Toprated'

export default class Lists extends Component {
  
  state =
  {
SelectedListTab:'1'
  }
  
  renderSelectedListTab()
  {
switch(this.state.SelectedListTab){
  case '1':
  return (<Upcoming />);
  break;

  case '2':
  return (<Popular />);
  break;

  case '3':
  return (<Toprated />);
  break;

  default:
}

  }
  
  render() {
    return (
      <Container>
        
        <Segment>
          <Button   active={this.state.SelectedListTab==='1'} onPress={() => this.setState({SelectedListTab:'1'})}>
            <Text>Upcoming</Text>
          </Button>
          <Button  active={this.state.SelectedListTab==='2'} onPress={() => this.setState({SelectedListTab:'2'})}>
            <Text>Popular</Text>
          </Button>
          <Button  active={this.state.SelectedListTab==='3'} onPress={() => this.setState({SelectedListTab:'3'})} >
            <Text>Toprated</Text>
          </Button>
        </Segment>

        <Content >

        {this.renderSelectedListTab()}
   
    
        </Content>
      </Container>
    );
  }
}







