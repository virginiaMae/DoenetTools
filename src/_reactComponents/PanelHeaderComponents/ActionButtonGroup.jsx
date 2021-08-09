import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  display: ${(props) => props.vertical ? 'static' : 'flex'};
  // margin: 2px 0px 2px 0px
 ;
`

const actionGroup = {
  margin: "0px -2px 0px -2px",
  borderRadius: '0',
  padding: '0px 12px 0px 10px',
};

const verticalActionGroup = {
  margin: "-2px 0px -2px 0px",
  borderRadius: '0',
  padding: '0px 10px 0px 10px'
}; 

const ActionButtonGroup = (props) => {
  // if (props.width) {
  //   if (props.width === "menu") {
  //     actionGroup.width = '235px'
  //   } else {
  //     actionGroup.width = props.width
  //   }
  // }
  let first_prop = props.vertical ? 'first_vert' : 'first';
  let last_prop = props.vertical ? 'last_vert' : 'last';
  let elem = React.Children.toArray(props.children);
  if (elem.length > 1) {
    elem = [React.cloneElement(elem[0], {num: first_prop})]
      .concat(elem.slice(1,-1))
      .concat(React.cloneElement(elem[elem.length - 1], {num: last_prop}));
  }
  return (
    <Container vertical={props.vertical}>
      <ThemeProvider theme={props.vertical ? verticalActionGroup : actionGroup}>{elem}</ThemeProvider>
    </Container>
  )
}

export default ActionButtonGroup;

