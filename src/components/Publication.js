import * as React from 'react';
import {Flex, Box, Heading, Text} from 'rebass';
import {Divider} from "rebass";
import styled from "styled-components";
import {colors} from "../theme";
import LatexText from "./LatexText";

const Link = styled('a')`
  color: ${colors.link}
  text-decoration: none;
  
  :hover {
    text-decoration: solid underline;
  }
`;

export default class Publication extends React.PureComponent {
  render(){
    const {publication} = this.props;
    const {title, pdf, arxiv_url, abstract, authors, subjects} = publication;

    const Subjects = () => {
      if(subjects.filter(s=>s.name!==null).length){
        return (<Text color={'darkGrey'}><i className={'fa fa-tags'}/> {subjects.filter(s=>s.name!==null).map(s => s.name).join(', ')}</Text>);
      }
      return null;
    };
    let Authors = () => {
      if (authors.length){
        return (<Text color={'darkGrey'}>{authors.map(a => a.name).join(', ')}</Text>)
      }
      return null;
    };

    return (
      <Flex py={2} px={1} flexWrap={'wrap'}>
        <Box color={'text'} p={1} borderRadius={4} w={1}>
          <LatexText fontSize={[2,3]} parentEl={Heading}>{title}</LatexText>
        </Box>
        <Box ml='auto' py={1}>
          <Authors/>
        </Box>
        <Box w={1}>
          <LatexText fontSize={[1, 2]} parentEl={Text}>{abstract}</LatexText>
        </Box>
        <Box w={1} py={2}>
          <Subjects/>
        </Box>
        <Box w={1}>
          <Link href={arxiv_url} target={'_blank'}><i className="fa fa-external-link-alt"/> View on ArXiv</Link>&nbsp;-&nbsp;
          <Link href={pdf} target={'_blank'}><i className="fa fa-file-pdf"/> View PDF</Link>
          <Divider color={'text'}/>
        </Box>
      </Flex>
    )
  }
}
