import styled from '@emotion/styled';
export const Button = styled.button`
  width: 75px;
  height: 30px;
  color: white;
  border-radius: 2.5px;
  background:  #26b9ff;

  border: solid 1px black;
  transition: all 300ms linear;
  cursor: pointer;

  :hover {
    background-color: #f0ffff;
    color: #ff9000;
    border: solid 1px grey;
  }
`;
export const BtnList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  width: 300px;
  margin: 0 auto;
`;