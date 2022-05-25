import axios from "axios";

async function serviceCallApi(endpoint, method, data = null, id = null) {
  const BASE_URL = "http://khanh.tokyo/api/"
  const url = id ? BASE_URL + endpoint + id : BASE_URL + endpoint;
  // console.log("data", data)
  // console.log("url", url)
  const result = await axios({
    method: method,
    url,
    data,
  });
  console.log("🚀 ~ file: serviceApi.js ~ line 13 ~ serviceCallApi ~ url", url)
  return result;
}
export default serviceCallApi;
