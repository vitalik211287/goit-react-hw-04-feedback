import styled from '@emotion/styled';

export const Button = styled.button`
  width: 75px;
  height: 30px;
  color: white;
  border-radius: 2.5px;
  background: #26b9ff;
  border: solid 1px black;
  transition: all 300ms linear;
  cursor: pointer;

  :hover {
    background-color: #f0ffff;
    color: #ff9000;
    border: solid 1px grey;
  }
`;
export const BtnItem = styled.li`

`;
export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 32px;
  text-align: center;
  color: #1f5a77;
`;
export const BtnList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  width: 300px;
  margin: 0 auto;
`;
export const Message = styled.p`
  font-size: 20px;
  text-align: center;
  color: #ff9000;
`;
export const Expres = styled.div`
  background-color: fwite;
  width: 350px;
  height: 100%;
  margin: 0 auto;
  margin-top: 25px;
  padding: 25px;
  border: solid 1px grey;
  border-radius: 2.5px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
`;
export const Number = styled.p`
  display: flex;
  justify-content: space-around;`

