<template>
  <view
    class="nav"
    :style="{
      height: statusHeightNum + 50 + 'px',
      lineHeight: statusHeightNum + 50 + 'px',
    }"
  >
    <wd-icon name="thin-arrow-left" size="20px" @click="back"></wd-icon>
    <view style="justify-self: center; font-size: 36rpx">扫描音乐</view>
    <view></view>
  </view>
  <view
    :style="{ height: statusHeightNum + 50 + 'px', background: '#fff' }"
  ></view>
  <button hover-class="btn_hover" class="btn" @click="toSearch">
    搜索本地音乐文件
  </button>
</template>
<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { useNavStore } from "@/stores/nav";
const { statusHeight, statusHeightNum } = useNavStore();
onLoad(() => {
  plus.android.requestPermissions(["android.permission.READ_EXTERNAL_STORAGE"]);
});
function back() {
  uni.navigateBack({
    delta: 1,
  });
}

function toSearch() {
  uni.navigateTo({
    url: "/pages/searchMP/searchMP",
  });
}
</script>
<style lang="scss">
.nav {
  box-sizing: border-box;
  padding: 0 24rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: fff;
  line-height: 50px;
  position: fixed;
  z-index: 9;
  width: 750rpx;
}

.btn {
  padding: 0;
  margin: 400rpx auto;
  border-radius: 64rpx;
  background: red;
  width: 666rpx;
  color: #fff;
}

.btn_hover {
  @extend .btn;
  background: rgba(255, 0, 0, 0.541);
}
</style>
