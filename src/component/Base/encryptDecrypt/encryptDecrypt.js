var CryptoJS = require("crypto-js");
const encrypt = (props) => {
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(props.value),
    "my-secret-key@123"
  ).toString();
  localStorage.setItem(props.key, ciphertext);
  return true;
};
const decrypt = (props) => {
  let propsValue = localStorage.getItem(props);
  if (propsValue != null) {
    var bytes = CryptoJS.AES.decrypt(propsValue, "my-secret-key@123");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
  return "[0]";
};

export { encrypt, decrypt };
