// 在http.js中引入axios
import axios from "axios"; // 引入axios

axios.defaults.timeout = 10000;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

axios.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

// 请求拦截器
// axios.interceptors.request.use(
//   (config) => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     const token = store.state.token;
//     token && (config.headers.Authorization = token);
//     return config;
//   },
//   (error) => {
//     return Promise.error(error);
//   }
// );

// 响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     if (response.status === 200) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   // 服务器状态码不是200的情况
//   (error) => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         // 404请求不存在
//         case 404:
//           Toast({
//             message: "网络请求不存在",
//             duration: 1500,
//             forbidClick: true,
//           });
//           break;
//         // 其他错误，直接抛出错误提示
//         default:
//           Toast({
//             message: error.response.data.message,
//             duration: 1500,
//             forbidClick: true,
//           });
//       }
//       return Promise.reject(error.response);
//     }
//   }
// );

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
