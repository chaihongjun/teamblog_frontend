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
export const getAllRandDataByLimit = (limit) => get("/api/rand/limit/" + limit);

//指定分类数据随机N条 【limit】限制条数
export const getCateRandDataByLimit = (categoryID, limit) =>
  get("/api/cate/" + categoryID + "/rand/limit/" + limit);

// 获取博客详情
export const getDetailData = (detailID) => get("/api/detail/" + detailID);

// 获取轮播图
export const getSlideData = (limit) => get("/api/slide/" + limit);

// 根据关键词 获取相关推荐  id 为当前文档ID
export const getRelateData = (keyword, limit, id) =>
  get("/api/relate/" + keyword + "/limit/" + limit + "/id/" + id);

// Tag相关 文档
export const getTagListData = (keyword, pageNumber) =>
  get("/api/tag/" + keyword + "/page/" + pageNumber);
