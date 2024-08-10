import axios from "axios"


export const MainUrl = "http://localhost:3000/api/v1/user"


export function PostData(url, data) {
    // body..
    //
    var headers = {
      "Content-Type": "application/json",
      "X-localization": "en",
    };
    return axios
      .post(MainUrl + url, data, { headers: headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        let errorStatus = JSON.parse(JSON.stringify(error.response));
        return errorStatus;
      });
  }