import { AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { subCategoryInput } from "../../Model/SubCategoryCons";
import adsPostingExtraFiledSlice, {
  dataStoreCalling,
} from "../../store/adsPostingExtraFiledSlice";
const SubcategoryCommonInput = (props) => {
  const disptach = useDispatch();
  let subcategoryy = subCategoryInput[props.category];
  let values = subcategoryy[props.subcategory];
  let obj = values;
  const [finalObj, SetFinalObj] = useState({});
  const [finalTemp, setFinalTemp] = useState(false);

  Object.keys(obj).forEach((key) => {
    let varkey = [];
    varkey = obj[key].map((result) => {
      return { value: result };
    });
    obj[key] = varkey;
  });
  useEffect(() => {
    disptach(dataStoreCalling(finalObj));
  }, [finalObj, SetFinalObj]);

  return (
    <div>
      {Object?.keys(obj)?.map((key) => {
        return (
          <div className="col-lg-6 col-sm-12">
            <AutoComplete
              style={{
                width: 300,
                height: 20,
              }}
              options={obj[key]}
              placeholder={key}
              autoFocus={true}
              onChange={(e) => {
                finalObj[key] = e;
                SetFinalObj(finalObj);
              }}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default SubcategoryCommonInput;
