<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 17:25:29
 * @LastEditTime: 2020-05-25 17:25:45
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 


<template>
  <div class="pagination">
    <ul>
      <li class="prev-page"></li>
      <li class="active">
        <span>1</span>
      </li>
      <li>
        <a href="https://demo.themebetter.com/dux/page/2">2</a>
      </li>
      <li>
        <a href="https://demo.themebetter.com/dux/page/3">3</a>
      </li>
      <li class="next-page">
        <a href="https://demo.themebetter.com/dux/page/2">下一页</a>
      </li>
      <li>
        <span>共 3 页</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Pagination"
};
</script>