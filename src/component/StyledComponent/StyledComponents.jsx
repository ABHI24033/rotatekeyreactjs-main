import { Table, AutoComplete } from "antd";
import styled from "styled-components";

export const Wrapper = styled.h1`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export const Title = styled.div`
  margin-left: 0px;
  color: #4d4d4d;
  font-size: 18px;
  font-family: "Poppins", sans-serif !important;
`;
export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Hola9Table = styled(Table)`
  .ant-table-cell {
    text-align: center;
    color: black;
    padding: 1em 0.5em;
  }
  &&& {
    ${"" /* background-color: red; */}
    ${"" /* padding:"8px"  */}
  }
`;

export const Auto1 = styled(AutoComplete)`
  .ant-select-selection-search-input {
  }
  .ant-select-selector {
    height: 45px !important;
    padding: 5px !important;
    font-size: 16px !important;
    border-radius: 5px !important;
  }
  &&& {
    ${"" /* background-color: red; */}
    ${"" /* padding:"8px"  */}
  }
`;
