<template>
    <div class="image-container">
      <!-- 加载状态 -->
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
        <div class="loading-text">加载中...</div>
      </div>
  
      <!-- 实际图片 -->
      <img
        :src="imageUrl"
        @load="handleLoad"
        @error="handleError"
        :class="{ 'loaded': !isLoading }"
        class="content-image"
        :alt="altText"
      >
  
      <!-- 错误状态 -->
      <div v-if="isError" class="error-overlay">
        <div class="error-icon">!</div>
        <div class="error-text">加载失败</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // 图片路径（必传）
      imageUrl: {
        type: String,
        required: true
      },
      // 替代文本
      altText: {
        type: String,
        default: 'Gallery Image'
      }
    },
    data() {
      return {
        isLoading: true,
        isError: false
      }
    },
    methods: {
      handleLoad() {
        this.isLoading = false
        this.isError = false
      },
      handleError() {
        this.isLoading = false
        this.isError = true
      }
    }
  }
  </script>
  
  <style scoped>
  /* 容器基础样式 */
  .image-container {
    position: relative;  /* 为绝对定位子元素提供参照 */
    width: 100%;         /* 充满父容器 */
    /* aspect-ratio: 4/3;   固定宽高比 */
    border-radius: 8px;  /* 圆角效果 */
    overflow: hidden;    /* 隐藏溢出内容 */
    background: #f5f5f5; /* 加载前的背景色 */
  }
  
  /* 加载状态层 */
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9); /* 半透明白色遮罩 */
  }
  
  /* 旋转加载动画 */
  .loading-spinner {
    width: 30px;
    height: 30px;
    border: 3px solid #eee;
    border-top-color: #666;  /* 顶部颜色不同形成旋转效果 */
    border-radius: 50%;
    animation: spin 1s linear infinite; /* 应用旋转动画 */
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); } /* 定义完整旋转 */
  }
  
  .loading-text {
    margin-top: 8px;
    color: #666;
    font-size: 0.9em;
  }
  
  /* 实际图片样式 */
  .content-image {
    width: 100%;
    height: 100%;
    object-fit: cover;    /* 保持比例填充容器 */
    opacity: 0;           /* 初始不可见 */
    transition: opacity 0.3s ease-in-out; /* 渐显动画 */
  }
  
  .content-image.loaded {
    opacity: 1;  /* 加载完成后显示 */
  }
  
  /* 错误状态层 */
  .error-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffe6e6;  /* 浅红色背景 */
  }
  
  .error-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ff4444;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .error-text {
    margin-top: 8px;
    color: #cc0000;
    font-size: 0.9em;
  }
  </style>
  