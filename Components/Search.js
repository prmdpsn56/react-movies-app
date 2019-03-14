import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import Shows from './Search/Shows'
import Movies from './Search/Movies'
import People from './Search/People'

export default class Search extends Component {
  
  state =
  {
SelectedSearchTab:'1'
  }
  
  renderSelectedSearchTab()
  {
switch(this.state.SelectedSearchTab){
  case '1':
  return (<People />);
  break;

  case '2':
  return (<Movies />);
  break;

  case '3':
  return (<Shows />);
  break;

  default:
}

  }
  
  render() {
    return (
      <Container>
        
        <Segment>
          <Button vertical  active={this.state.SelectedSearchTab==='1'} onPress={() => this.setState({SelectedSearchTab:'1'})}>
            <Text>People</Text>
          </Button>
          <Button vertical active={this.state.SelectedSearchTab==='2'} onPress={() => this.setState({SelectedSearchTab:'2'})}>
            <Text>Movies</Text>
          </Button>
          <Button vertical active={this.state.SelectedSearchTab==='3'} onPress={() => this.setState({SelectedSearchTab:'3'})} >
            <Text>Shows</Text>
          </Button>
        </Segment>

        <Content >

        {this.renderSelectedSearchTab()}
     
        </Content>
      </Container>
    );
  }
}







