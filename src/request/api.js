/**
 * api接口统一管理
 */
import { get, post } from "./http";

//@param {Object} args

//请求全部博客数据 【pageNumber】当前页码
export const getAllData = (pageNumber) => get("/api/page/" + pageNumber);

//请求分类的分页数据  【categoryID】 分类ID  【pageNumber】当前页码
export const getCateDataByPagination = (categoryID, pageNumber) =>
  get("/api/cate/" + categoryID + "/page/" + pageNumber);

//请求分类的数据 N 条       【categoryID】 分类ID  【limit】限制条数
export const getCateDataByLimit = (categoryID, limit) =>
  get("/api/cate/" + categoryID + "/limit/" + limit);

//全部数据随机N条 【limit】限制条数
// export const getCateDataByLimit = (limit) => get("/api/limit/" + limit);

// 获取博客详情
export const getDetailData = (detailID) => get("/api/detail/" + detailID);
