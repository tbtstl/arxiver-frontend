import * as React from 'react';
import {Flex, Box, Container, Text} from 'rebass';

export default class Results extends React.Component {
  render(){
    return (
      <Container>
        <Flex bg={'white'}>
          <Box p={2}>
            <Text color={'text'} >Here is a list of results</Text>
          </Box>
        </Flex>
      </Container>
    )
  }
}
