import { useDispatch } from "react-redux/es/exports";
// import FileBase64 from 'react-file-base64';
// import { add } from '../../../store/profileImageSlice';

// export class ImageUpload extends React.Component {
//      disptach=useDispatch()
//     constructor() {
//       super()
//       this.state = {
//         files: []
//       }
//     }

//     // Callback~
//     const getFiles(){

//         this.disptach(add(files[0].base64))
//        this.setState({ files: files })
//     }

//     render() {
//       return (
//         <FileBase64
//           multiple={ true }
//           onDone={ getFiles } />
//       )
//     }

//   }

import React from "react";
import FileBase64 from "react-file-base64";
import { add } from "../../../store/profileImageSlice";

const ImageUpload = () => {
  const disptach = useDispatch();
  const getFiles = (files) => {
    disptach(add(files[0].base64));
  };
  return <FileBase64 multiple={true} onDone={getFiles} />;
};

export default ImageUpload;
