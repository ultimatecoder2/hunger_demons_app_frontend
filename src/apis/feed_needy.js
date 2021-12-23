import axios from 'axios';
const baseURL = "https://hunger-demons-backend.herokuapp.com/"
const record =  axios.create({
    baseURL:baseURL
})
const authRecord =(token) => axios.create({
    baseURL: baseURL,
    headers: {'Authorization': 'Bearer '+ token}
  });
export {authRecord, record}