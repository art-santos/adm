import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  background-color: ${props => props.color};
  width: 22%;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex; 
}
`;

export const Content = styled.div`
width: 70%;
padding-left: 25px;
padding-top: 15px;
padding-bottom: 15px;
display: flex;
flex-direction: column; 
justify-content: space-between;
span{
  font-size: 18px;
  font-weight: 700;
}
h1{
  font-size: 28px;
}
`

export const ContentIcon = styled.div`
width: 30%;
margin: auto; 
text-align: right; 
overflow: hidden;
`