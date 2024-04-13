import React, { useContext } from "react";
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import Autocomplete from 'react-google-autocomplete';
// import {usePlacesWidget} from 'react-google-autocomplete';
// import "./styles.css";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { UserContext } from "../../../App";

const axios = require("axios");
const GoogleAutoComplteforAddProduct = () => {
  const UserData = useContext(UserContext);
  const [address, setAddress] = useState();
  const [addressObj, setAddressObj] = useState();
  const getAddressObject = (address_components) => {
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: ["administrative_area_level_1"],
      city: ["locality"],
      country: ["country"],
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: "",
    };

    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });

    // Fix the shape to match our schema
    address.address = address.street_number + " " + address.street;
    delete address.street_number;
    delete address.street;
    if (address.country === "US") {
      address.state = address.province;
      delete address.province;
    }
    return address;
  };

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        address &&
        address.value &&
        (await geocodeByPlaceId(address.value.place_id));
      UserData.setLocality(address?.label);
      const addressObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);
      setAddressObj(addressObject);
    };
    func();
  }, [address]);
  return (
    <div className="App">
      <GooglePlacesAutocomplete
        // apiKey="AIzaSyChTcMUCY9Zw3j00st0uKkqTz0RGlOpea8"
        // apiKey="AIzaSyDANjx3bosEtIyzJaoWs50Wnt6nt_1rmxU"
        apiKey="AIzaSyAjIUq-1Sc0m5IFBmOf07dEc2H0DI7SguQ"
        selectProps={{
          isClearable: true,
          value: address,
          onChange: (val) => {
            setAddress(val);
          },
          styles: {
            input: (provided) => ({
              ...provided,
              boxShadow: 0,
              "&:hover": {
                border: "1px solid purple",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              boxShadow: 0,
              "&:hover": {
                border: "1px solid purple",
              },
            }),
          },
        }}
      />
    </div>
  );
};
export default GoogleAutoComplteforAddProduct;
