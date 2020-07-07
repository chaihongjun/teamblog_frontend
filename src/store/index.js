import Vue from "vue";
import Vuex from "vuex";
// 首页 请求
import { getAllData } from "@/request/api";
//  侧栏 公告 请求
import { getCateDataByLimit } from "@/request/api";
//  侧栏 随机推荐 请求
import { getAllRandDataByLimit } from "@/request/api";
//  各栏目列表 请求
import { getCateDataByPagination } from "@/request/api";
//  详情页 请求
import { getDetailData } from "@/request/api";

//  轮播图 请求
import { getSlideData } from "@/request/api";

// 推荐相关
import { getRelateData } from "@/request/api";

// Tag 列表页
import { getTagListData } from "@/request/api";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //Loading 组件是否显示
    isShow: false,
    isActive: 0, // 菜单高亮
    title: "", //文档标题
    indexRes: {}, // 首页接口
    cateRes: {}, //  分类栏目接口
    noticeRes: {}, // 公告接口
    noticeLimit: 5, //调用公告条数
    noticeId: 5, //公告栏目ID
    randRes: {},
    randLimit: 5, // 调用随机推荐条数
    current_page: 1, // 当前分页页码
    current_cateId: 2, //当前栏目ID
    detailId: 1, //内容ID
    detailRes: {}, // 详情页接口
    prevDetailId: 0,
    nextDetailId: 2,
    prevDetailRes: {},
    nextDetailRes: {},
    slideRes: {},
    relateRes: [],
  },

  mutations: {
    // Loading 状态变化
    updateLoading(state, payload) {
      state.isShow = payload;
    },

    // 更新高亮菜单
    updateHilightMenu(state, payload) {
      state.isActive = payload;
    },

    // 修改 当前栏目ID
    updateCateId(state, payload) {
      state.current_cateId = payload.cateId;
      // state.title = payload.title;
    },
    // 修改 当前分页页码
    updateCurrentPage(state, payload) {
      state.current_page = payload;
    },

    //更新详情页ID
    updateDetailId(state, payload) {
      state.detailId = payload;
    },

    //更新当前页面标题
    updateTitle(state, payload) {
      state.title = payload;
    },

    //获取首页数据
    getIndexData(state, res) {
      state.indexRes = res;
    },

    //获取公告数据
    getNoticeData(state, res) {
      state.noticeRes = res;
    },
    //获取随机数据数据
    getRandData(state, res) {
      state.randRes = res;
    },

    //获取分类数据
    getCateData(state, res) {
      state.cateRes = res;
    },
    // 获取当前文章
    getDetailData(state, res) {
      state.detailRes = res;
      state.title = res.data.title;
    },

    // 获取前一篇
    getPrevDetailData(state, res) {
      state.prevDetailRes = res;
    },
    // 获取后一篇
    getNextDetailData(state, res) {
      state.nextDetailRes = res;
    },
    // 获取轮播图
    // 获取后一篇
    getSlideData(state, res) {
      state.slideRes = res;
    },

    // 详情页 相关推荐

    getRelateRecommend(state, res) {
      state.relateRes = res.data;
    },

    // tag 列表页
    getTagList(state, res) {
      //
      state.cateRes = res;
    },
  },
  // 页面数据请求
  actions: {
    updateCateId(context, payload) {
      context.commit("updateCateId", payload);
    },

    updateCurrentPage(context, payload) {
      context.commit("updateCurrentPage", payload);
    },

    // 首页列表
    getIndexDataAction(context, payload) {
      getAllData(payload.current_page).then((res) => {
        context.commit("getIndexData", res);
      });
    },
    // 侧栏公告
    getNoticeDataAction(context, payload) {
      getCateDataByLimit(payload.noticeId, payload.limit).then((res) => {
        context.commit("getNoticeData", res);
      });
    },
    //侧栏随机推荐
    getRandDataAction(context, payload) {
      getAllRandDataByLimit(payload.limit).then((res) => {
        context.commit("getRandData", res);
      });
    },
    // 各栏目列表 请求
    getCateDataAction(context, payload) {
      getCateDataByPagination(payload.cateId, payload.current_page).then(
        (res) => {
          context.commit("getCateData", res);
        }
      );
    },
    // 详情页 请求
    getDetailDataAction(context, payload) {
      getDetailData(payload.detailId).then((res) => {
        context.commit("getDetailData", res);
      });
    },

    // 前一篇
    getPrevDetailDataAction(context, payload) {
      getDetailData(payload.detailId).then((res) => {
        context.commit("getPrevDetailData", res);
      });
    },

    // 后一篇
    getNextDetailDataAction(context, payload) {
      getDetailData(payload.detailId).then((res) => {
        context.commit("getNextDetailData", res);
      });
    },

    //轮播图
    getSildeDataAction(context, payload) {
      getSlideData(payload.limit).then((res) => {
        context.commit("getSlideData", res);
      });
    },

    //详情页 相关推荐

    getRelateRecommend(context, payload) {
      // 将当前页面的关键词数组依次进行匹配查询
      for (let i = 0; i < payload.keywords.length; i++) {
        getRelateData(payload.keywords[i], payload.limit, payload.id).then(
          (res) => {
            context.commit("getRelateRecommend", res);
          }
        );
      }
    },

    // tag 列表页
    getTagListAction(context, payload) {
      getTagListData(payload.keyword, payload.current_page).then((res) => {
        context.commit("getTagList", res);
      });
    },

    //侧栏推荐制定
    // 网站统计
  },
  modules: {},
});
