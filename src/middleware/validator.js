const mongoose = require("mongoose");
const axios = require('axios')

const isValidObjectId = (objectId) => {
  return mongoose.Types.ObjectId.isValid(objectId);
};

const objectValue = (value) => {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.length === 0) return false;
  return true;
};

const keyValue = (value) => {
    if (Object.keys(value).length === 0) return false;
    return true;
 };

const nameRegex = (value) => {
  let nameRegex = /^[A-Za-z\s]{1,}[\]{0,1}[A-Za-z\s]{1,}$/;
  if (nameRegex.test(value)) return true;
};

const collegeRegex = (value) => {
  let collegeRegex =
    /^[A-Za-z\s]{0,}[\.,'-]{0,1}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}$/;
  if (collegeRegex.test(value))
   return true;
};

const emailRegex = (value) => {
  let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (emailRegex.test(value)) return true;
};

const mobileRegex=(value)=>{
    let mobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (mobileRegex.test(value)) 
    return true;
}

const urlRegex =(value)=>{
  let urlRegex = /(https|http?:\/\/.*\.(?:png|gif|webp|jpeg|jpg))/i;
  if(urlRegex.test(value))
  return true;
}

// const verifyLogolink = async (value) =>{
// // let validLogolink = false
// await axios.get(value)
//     .then((url) => {
//         if (url.status === 200 || 201) {
//             if (url.headers["content-type"].startsWith("image/"))
//                 // validLogolink = true;
//                 return true
//         }
//     })
//     .catch((error) => validLogolink = false)
//   }

module.exports = { isValidObjectId, objectValue, nameRegex, collegeRegex, emailRegex, keyValue, mobileRegex, urlRegex };