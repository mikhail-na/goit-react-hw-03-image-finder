import styled from '@emotion/styled';

export const Searchbar = styled.header`
 
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  width: 100%;
  background: linear-gradient(138.13deg, #22343cae 25.87%, #1f2e35b1 100%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchForm = styled.form`

  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchBtn = styled.button`

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
export const SearchInput = styled.input`
  margin: 14px;
  padding: 0px 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;

  width: 350px;
  height: 48px;

  border-radius: 12px;

  background: rgb(41, 41, 95);
`;

export const SearchBtnLabel = styled.span`
`;