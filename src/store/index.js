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
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //Loading 组件是否显示
    isShow: false,
    isActive: 0, // 菜单高亮
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
    },
    // 修改 当前分页页码
    updateCurrentPage(state, payload) {
      state.current_page = payload;
    },

    //更新详情页ID
    updateDetailId(state, payload) {
      state.detailId = payload;
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
    },

    // 获取前一篇
    getPrevDetailData(state, res) {
      state.prevDetailRes = res;
    },
    // 获取后一篇
    getNextDetailData(state, res) {
      state.nextDetailRes = res;
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
        console.log(res);
        // context.commit("getPrevDetailData", res);
      });
    },

    // 后一篇
    getNextDetailDataAction(context, payload) {
      getDetailData(payload.detailId)
        .then((res) => {
          context.commit("getNextDetailData", res);
        })
        .catch((err) => {
          console.log("已经是最后一篇文章了");
        });
    },

    //侧栏推荐制定
    // 网站统计
  },
  modules: {},
});
