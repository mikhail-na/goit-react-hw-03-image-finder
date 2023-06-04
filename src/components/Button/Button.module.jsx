import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`

 font-weight: 700;
  font-size: 20px;
  line-height: 1.7;

 width: 140px;
  height: 52px;
  outline: none;
  border: none;

  line-height: 100%;
  text-align: center;
  color: rgb(71, 71, 201);

  border-radius: 12px;

  background:  rgb(215, 215, 64);
  
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: rgb(241, 241, 19);
  }
`;