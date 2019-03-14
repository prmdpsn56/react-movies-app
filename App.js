import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import Head from './Components/Header'
import Search from "./Components/Search"
import Lists from './Components/Lists'
import Playing from './Components/Playing'

export default class App extends React.Component {

state =
{
  SelectedTab:'1'
}

renderSelectedTab()
{

      switch (this.state.SelectedTab)
      {
        case '1':
        return (<Playing/>);
        break;

        case '2':
        return(<Search/>);
        break;

        case '3':
        return(<Lists/>);
        break;

        default:
      }

}

  render() {
    return (
      <Container>
      <Header>
<Head/>
      </Header>

      <Content>
      {this.renderSelectedTab()}
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical active={this.state.SelectedTab==='1'} onPress={() => this.setState({SelectedTab:'1'})}>
            <Icon name="play" />
            <Text>Now Playing</Text>
          </Button>
          <Button vertical active={this.state.SelectedTab==='2'} onPress={() => this.setState({SelectedTab:'2'})}>
            <Icon name="search" />
            <Text>Search</Text>
          </Button>
          <Button vertical active={this.state.SelectedTab==='3'} onPress={() => this.setState({SelectedTab:'3'})}>
            <Icon active name="list" />
            <Text>Lists</Text>
          </Button>

        </FooterTab>
      </Footer>
    </Container>
    );
  }
}
