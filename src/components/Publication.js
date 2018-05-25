import * as React from 'react';
import {Flex, Box, Heading, Text} from 'rebass';
import {Divider} from "rebass";
import styled from "styled-components";
import Latex from 'react-latex';
import {colors} from "../theme";

const Link = styled('a')`
  color: ${colors.lightPurple}
  text-decoration: none;
  
  :hover {
    text-decoration: solid underline;
  }
`;

export default class Publication extends React.PureComponent {
  render(){
    const {publication} = this.props;
    const {title, pdf, arxiv_url, abstract, authors, subjects} = publication;
    return (
      <Flex py={2} px={1} flexWrap={'wrap'}>
        <Box color={'text'} p={1} borderRadius={4} w={1}>
          <Heading f={[2,3]}><Latex>{title}</Latex></Heading>
        </Box>
        <Box ml='auto' py={1}>
          <Text color={'darkGrey'}>{authors.map(a => a.name).join(', ')}</Text>
        </Box>
        <Box w={1}>
          <Text><Latex>{abstract}</Latex></Text>
        </Box>
        <Box w={1} py={2}>
          <Text color={'darkGrey'}><i className={'fa fa-tags'}/> {subjects.map(s => s.name).join(', ')}</Text>
        </Box>
        <Box w={1}>
          <Link href={arxiv_url} target={'_blank'}><i className="fa fa-external-link-alt"/> View on ArXiv</Link>&nbsp;
          <Link href={pdf} target={'_blank'}><i className="fa fa-file-pdf"/> View PDF</Link>
          <Divider color={'text'}/>
        </Box>
      </Flex>
    )
  }
}
