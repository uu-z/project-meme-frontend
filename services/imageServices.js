import { request } from "../utils";
import store from "../store";

export default {
  getFiles: ({params}) => {
    return request({
      url: "images",
      params
    });
  },
  edit: ({id, data})=> {
    return request({
      method: "PUT",
      url: `images/${id}`,
      data
    })
  }
};
