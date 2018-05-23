import * as React from 'react';
import {Heading, Flex, Box, Text} from 'rebass';
import Input from "../components/Input";
import logo from '../static/svg/icon.svg';
import styled from "styled-components";

const Logo = styled('img')`
  max-height: 100%;
  max-width: 100%;
  height: 1em;
`;

export default class Brand extends React.Component {
  render(){
    return (
      <Flex flexDirection={'column'}>
        <Box mx={'auto'} pt={[1, 2, 3, 4]}>
          <Heading fontSize={[7,8,9]}><Logo src={logo}/></Heading>
        </Box>
        <Box mx={'auto'} my={'auto'}>
          <Heading color='text' fontSize={[7,8,9]}>Arxiver</Heading>
        </Box>
        <Box mx={'auto'}>
          <Text color={'text'} fontSize={[1, 2, 3]}>
            A simple way to search and save ArXiv articles.
          </Text>
        </Box>
        <Box mx={'auto'} mt={4} w={1}>
          <Input pt={3} placeholder={'Search Articles, Authors, or Subjects...'}/>
        </Box>
      </Flex>
    )
  }
}
