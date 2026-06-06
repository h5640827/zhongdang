<template>
  <div id="GoTop" @click="GoTop()">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </div>
</template>

<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    if (window.cozeChatLoaded) return;
    window.cozeChatLoaded = true;

    const script = document.createElement('script');
    script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.5/libs/cn/index.js';

    script.onload = () => {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7631236523366547471',
        },
        componentProps: {
          title: '中档集团智能客服',
          layout: 'float'
        },
        auth: {
          type: 'token',
          token: 'pat_9fqHSTijpuFZhxObvAv9JzufZkuR3vLOJyk2N3JC1askeViR7iXskLsqGsC5IIVM',
          onRefreshToken: function () {
            return 'pat_9fqHSTijpuFZhxObvAv9JzufZkuR3vLOJyk2N3JC1askeViR7iXskLsqGsC5IIVM'
          }
        }
      });

      // ✅ 用定时器持续监听，防止点击后被重置
      setInterval(() => {
        let container = document.querySelector('div[style*="position: fixed"]');
        let img = container ? container.querySelector('img') : null;

        if (img && container) {
          // 🔒 永久锁定位置，点击后自动恢复
          container.style.cssText = `
            position: fixed !important;
            right: 20px !important;
            bottom: 150px !important;
            z-index: 99999999 !important;
          `;

          // 🔒 永久锁定晃动动画，点击后不消失
          img.style.cssText = `
            animation: robotShake 1.2s ease-in-out infinite !important;
            transform-origin: center bottom !important;
          `;
        }
      }, 200);
    };

    document.body.appendChild(script);
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    }
  }
};
</script>

<style scoped>
#GoTop {
  width: 46px;
  height: 46px;
  position: fixed;
  right: 20px;
  bottom: 28px;
  z-index: 99999999;
  cursor: pointer;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e73be, #24b7f2);
  box-shadow: 0 12px 26px rgba(15, 76, 145, 0.28);
  transition: all 0.25s ease;
}
#GoTop:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 32px rgba(15, 76, 145, 0.34);
}
#GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 46px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  #GoTop {
    width: 40px;
    height: 40px;
    right: 14px;
    bottom: 18px;
  }
  #GoTop > span {
    font-size: 17px;
    line-height: 40px;
  }
}
</style>

<!-- 上下+左右混合晃动动画 -->
<style>
@keyframes robotShake {
  0%   { transform: translateY(0) rotate(-3deg); }
  50%  { transform: translateY(-5px) rotate(3deg); }
  100% { transform: translateY(0) rotate(-3deg); }
}
</style>
