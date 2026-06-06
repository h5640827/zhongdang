<template>
  <div class="gallery-page">
    

    <div class="multi-batch-container">
      <div class="batch-group">
        <h2 class="batch-title">资质证书</h2>
        <div class="batch-images">
          <ImageLoader v-for="num in 2" :key="`nature-${num}`"
            :imageUrl="require(`@/assets/img/certificationImg/x${num}.webp`)" altText="资质证书" />
        </div>
      </div>

      <div class="batch-group">
        <h2 class="batch-title">税务荣誉证书</h2>
        <div class="batch-images">
          <ImageLoader v-for="num in 2" :key="`city-${num}`" :imageUrl="require(`@/assets/img/taxImg/d${num}.webp`)"
            altText="税务荣誉证书" />
        </div>
      </div>
    </div>

    <!-- 第一组图片 -->
    <div class="batch-container">
      <h2 class="batch-title">ISO 证书</h2>
      <div class="image-grid">
        <ImageLoader v-for="num in 4" :key="`nature-${num}`" :imageUrl="require(`@/assets/img/isoImg/img0${num}.webp`)"
          altText="ISO 证书" />
      </div>
    </div>

  <!-- 第二组图片 -->
  <div class="batch-container">
    <h2 class="batch-title">计算机软件著作权登记证书</h2>
    <div class="image-grid">
      <ImageLoader v-for="num in 17" :key="`city-${num}`" :imageUrl="require(`@/assets/img/copyright/a${num}.webp`)"
        altText="计算机软件著作权登记证书" />
    </div>
  </div>

  <!-- 第三组图片 -->
  <div class="batch-container">
    <h2 class="batch-title">诚信证书</h2>
    <div class="image-grid">
      <ImageLoader v-for="num in 8" :key="`city-${num}`" :imageUrl="require(`@/assets/img/honestyImg/b${num}.webp`)"
        altText="诚信证书" />
    </div>
  </div>

  <div class="batch-container">
    <h2 class="batch-title">软件测试报告</h2>
    <div class="image-grid">
      <ImageLoader v-for="num in 4" :key="`city-${num}`" :imageUrl="require(`@/assets/img/testImg/c${num}.webp`)"
        altText="软件测试报告" />
    </div>
  </div>

  <div class="batch-container">
    <h2 class="batch-title">龙芯认证证书</h2>
    <div class="image-grid">
      <ImageLoader v-for="num in 6" :key="`city-${num}`" :imageUrl="require(`@/assets/img/loongsunImg/l${num}.webp`)"
        altText="龙芯认证证书" />
    </div>
  </div>

  <div class="batch-container">
    <h2 class="batch-title">浪潮认证证书</h2>
    <div class="image-grid">
      <ImageLoader v-for="num in 7" :key="`city-${num}`" :imageUrl="require(`@/assets/img/inspurImg/inspur${num}.webp`)"
        altText="浪潮认证证书" />
    </div>
  </div>

  <div class="batch-container">
    <h2 class="batch-title">鲲鹏认证证书</h2>
    <div class="image-grid">
      <ImageLoader :imageUrl="require(`@/assets/img/kunpeng.webp`)" altText="鲲鹏认证证书" />
    </div>
  </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader.vue'

export default {
  name: 'NewIntroduce',
  components: { ImageLoader }
}
</script>

<style scoped>
/* 页面整体样式 */

.batch-row {
  display: flex;
  gap: 20px;
}

.gallery-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 批次容器 */
.batch-container {
  margin-bottom: 40px;
  flex: 1;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.batch-title {
  color: #333;
  border-left: 4px solid #666;
  padding-left: 12px;
  margin: 20px 0;
}

/* 图片网格布局 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

.multi-batch-container {
  overflow-x: auto;
  /* 横向滚动 */
  grid-auto-flow: column;
  /* 改为横向排列 */
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* 关键修正 */
  width: 100%;
  gap: 20px;
  padding: 10px;
}

/* 批次组样式 */
.batch-group {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* 批次内部图片布局 */
.batch-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 每批次显示2张 */
  gap: 15px;
  /* 图片间距 */
  margin-top: 15px;
}

/* 标题样式 */
.batch-title {
  color: #333;
  margin: 0 0 10px;
  padding-left: 8px;
  border-left: 3px solid #3498db;
}

/* 响应式处理 */
@media (max-width: 768px) {
  .multi-batch-container {
    grid-template-columns: 1fr;
    /* 移动端单列显示 */
    gap: 20px;
  }

  .batch-images {
    grid-template-columns: 1fr;
    /* 移动端单列图片 */
  }
}
</style>