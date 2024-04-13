import React, { Component } from 'react';
import EasyEdit, {Types} from 'react-easy-edit';


function editAds() {
  
  const save = (value) => {console.log(value)}
  const cancel = () => {console.log("Cancelled")}

  return (
    <EasyEdit
      type={Types.TEXT}
      onSave={save}
      onCancel={cancel}
      saveButtonLabel="Save Me"
      cancelButtonLabel="Cancel Me"
      attributes={{ name: "awesome-input", id: 1}}
      instructions="Star this repo!"
    />
  );
}

export default editAds