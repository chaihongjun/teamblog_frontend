<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 14:01:57
 * @LastEditTime: 2020-05-25 14:03:11
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 





<template>
  <div class="rollbar rollbar-rb">
    <ul>
      <li>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=937373201&site=qq&menu=yes">
          <i class="fa fa-qq"></i>
          <span>QQ咨询</span>
        </a>
        <h6>
          QQ咨询
          <i></i>
        </h6>
      </li>
      <li>
        <a href="tel:13900000000">
          <i class="fa fa-phone"></i>
          <span>电话咨询</span>
        </a>
        <h6>
          电话咨询
          <i></i>
        </h6>
      </li>
      <li class="rollbar-qrcode">
        <a href="javascript:;">
          <i class="fa fa-qrcode"></i>
          <span>微信咨询</span>
        </a>
        <h6>
          关注微信
          <img src="https://themebetter.com/qrcode?url=http://demo.themebetter.com/dux" />
          <i></i>
        </h6>
      </li>
      <li>
        <a target="_blank" href="https://themebetter.com">
          <i class="fa fa-globe"></i>
          <span>在线咨询</span>
        </a>
        <h6>
          在线咨询
          <i></i>
        </h6>
      </li>
      <li class="rollbar-totop">
        <a href="javascript:(jsui.scrollTo());">
          <i class="fa fa-angle-up"></i>
          <span>回顶</span>
        </a>
        <h6>
          回顶部
          <i></i>
        </h6>
      </li>
    </ul>
  </div>
</template>




<script>
export default {
  name: "Float"
};
</script>