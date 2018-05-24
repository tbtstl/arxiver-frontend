import * as React from 'react';
import {Flex, Box, Heading, Text} from 'rebass';

export default class Publication extends React.PureComponent {
  render(){
    const {publication} = this.props;
    const {title, pdf, arxiv_url, abstract, authors, subjects} = publication;  // eslint-disable-line
    return (
      <Flex py={2}>
        <Box color={'text'} p={3} borderRadius={4}>
          <Heading f={[2,3]}>{title}</Heading>
          <Text>{abstract}</Text>
        </Box>
      </Flex>
    )
  }
}
