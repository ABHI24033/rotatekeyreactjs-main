import { Select, AutoComplete } from "antd";
import styled from "styled-components";

const HolaAutoComplete = styled(Select)`
  &&& {
    margin: 8px;
  }
`;

const HolaAutoCompletePrice = styled(AutoComplete)`
  &&& {
    margin: 8px;
  }
`;

export { HolaAutoComplete, HolaAutoCompletePrice };
