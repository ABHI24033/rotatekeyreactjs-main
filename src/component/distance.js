import getDistance from "geolib/es/getDistance";
import { useSelector } from "react-redux";
import sortObjectsArray from "sort-objects-array";
// import { newProductValue, productValueRemove, productValueValue } from "../../../store/showProductsliceValue";
// import { productValueRemove, productValueValue} from "../App/store/showProductsliceValue"
const Distance = (props) => {
  let lat = localStorage.getItem("lat");
  let long = localStorage.getItem("long");

  //  const productValue = useSelector((state) => state.showProductsliceValue);
  const productValue = props;

  let distIdObj = productValue?.map((result) => {
    let tempDistId = { id: "", distance: "" };
    let distance = getDistance(
      { latitude: lat, longitude: long },
      {
        latitude: !result.lati ? 0 : result.lati,
        longitude: !result.long ? 0 : result.long,
      }
    );
    tempDistId["distance"] = distance;
    tempDistId["id"] = result.id;
    return tempDistId;
  });
  distIdObj = sortObjectsArray(distIdObj, "distance");

  let idValue = distIdObj.map((result) => result.id);

  let shorted = [];
  for (let y = 0; y < idValue.length; y++) {
    for (let x = 0; x < props.length; x++) {
      if (idValue[y] == props[x].id) {
        shorted.push(props[x]);
        props.splice(x, 1);
      }
    }
    // let idone=0
    // if(idValue.indexOf(result.id)){
    //     props.splice(idone, 1);
    //     idone=idone+1
    //     return result}
    // idone=idone+1
    // return null
  }

  return shorted;
};

export default Distance;
