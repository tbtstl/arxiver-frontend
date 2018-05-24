import * as React from 'react';
import {Heading, Flex, Box, Text} from 'rebass';
import Input from "../components/Input";
import logo from '../static/svg/icon.svg';
import styled from "styled-components";
import {observer, inject} from "mobx-react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

const Logo = styled('img')`
  max-height: 100%;
  max-width: 100%;
  height: 1em;
`;

const BrandedHeading = Heading.extend`
  font-family: "Aleo", system-ui, sans-serif
`;

const BrandedText = Text.extend`
  font-family: "Aleo", system-ui, sans-serif
`;

@inject('PublicationStore')
@observer
export default class Brand extends React.Component {
  handleInputChange(e){
    const {PublicationStore} = this.props;
    PublicationStore.setCurrentQuery(e.target.value);
  }

  handleKeyPress(e){
    const {PublicationStore, history} = this.props;
    if(e.key === 'Enter'){
      PublicationStore.fetchPublications(history);
    }
  }

  render(){
    const {PublicationStore} = this.props;

    // If the client has searched already, display brand as a navbar
    if (!this.props.match.isExact){
      return (
        <Navbar>
          <Flex w={1}>
            <Box mt={['10px']}>
              <Link to={'/'}>
                <Heading fontSize={[3,4,5]}><Logo src={logo}/></Heading>
              </Link>
            </Box>
            <Box ml={'auto'} w={1}>
              <Input fontSize={[3,4,5]} color='text' placeholder={'Search...'} value={PublicationStore.currentQuery} onChange={this.handleInputChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
            </Box>
          </Flex>
        </Navbar>
      )
    }

    return (
      <Flex flexDirection={'column'}>
        <Box mx={'auto'} pt={[1, 2, 3, 4]}>
          <Heading fontSize={[7,8,9]}><Logo src={logo}/></Heading>
        </Box>
        <Box mx={'auto'} my={'auto'}>
          <BrandedHeading color='text' fontFamily={'system-ui'} fontSize={[7,8,9]}>Arxiver</BrandedHeading>
        </Box>
        <Box mx={'auto'}>
          <BrandedText color={'text'} fontSize={[1, 2, 3]}>
            A simple way to search and save ArXiv articles.
          </BrandedText>
        </Box>
        <Box mx={'auto'} mt={4} w={1}>
          <Input fontSize={[2,3,4]} pt={3} placeholder={'Search Articles, Authors, or Subjects...'} onChange={this.handleInputChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} animate={'true'}/>
        </Box>
      </Flex>
    )
  }
}
