// 在http.js中引入axios
import axios from "axios"; // 引入axios

axios.defaults.timeout = 10000;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

axios.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

//定义一个请求拦截器
// axios.interceptors.request.use(function(config) {
//   store.state.isShow = true; //在请求发出之前进行一些操作,显示loading画面
//   return config;
// });
// //定义一个响应拦截器
// axios.interceptors.response.use(function(config) {
//   store.state.isShow = false; //在这里对返回的数据进行处理，得到数据，关闭loading
//   return config;
// });

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]cd
 */
export function get(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
