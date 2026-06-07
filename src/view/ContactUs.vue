<template>
  <div id="ContactUs">
    <section class="contact-hero">
      <div class="container">
        <span class="hero-kicker">Contact Us</span>
        <h1>联系我们</h1>
        <p>欢迎咨询数字档案、软件产品、系统集成与档案资源服务，我们会尽快与您联系。</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-panel contact-info-panel wow slideInLeft">
            <span class="section-kicker">Business Contact</span>
            <h2>让档案信息化建设更清晰、更高效</h2>
            <p class="contact-summary">
              请留下您的需求信息，或通过邮箱、热线与我们取得联系。我们将结合业务场景提供产品与服务建议。
            </p>

            <div class="info-list">
              <div class="info-item">
                <span class="info-label">邮箱</span>
                <strong>{{ company.email }}</strong>
              </div>
              <div class="info-item">
                <span class="info-label">电话</span>
                <strong>{{ company.tel }}</strong>
              </div>
              <div class="info-item">
                <span class="info-label">地址</span>
                <strong>{{ company.address }}</strong>
              </div>
            </div>

            <form class="contact-form" role="form" @submit.prevent="subContent">
              <div class="form-row">
                <label for="contactName" class="zy-required">姓名</label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="请输入姓名"
                  v-model.trim="form.contactName"
                >
              </div>

              <div class="form-row">
                <label for="contactPhone" class="zy-required">电话</label>
                <input
                  type="text"
                  id="contactPhone"
                  placeholder="请输入联系电话"
                  v-model.trim="form.contactPhone"
                >
              </div>

              <div class="form-row">
                <label for="contactEmail">邮箱</label>
                <input
                  type="text"
                  id="contactEmail"
                  placeholder="请输入邮箱"
                  v-model.trim="form.contactEmail"
                >
              </div>

              <div class="form-row">
                <label for="contactContent" class="zy-required">需求内容</label>
                <textarea
                  id="contactContent"
                  rows="6"
                  placeholder="请简要描述您的项目需求"
                  v-model.trim="form.contactContent"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn">提交需求</button>
            </form>
          </div>

          <div class="contact-panel map-panel wow slideInRight">
            <div class="map-heading">
              <span>Company Location</span>
              <strong>{{ BDMapInfo.title }}</strong>
            </div>
            <div id="map" :class="{ 'map-fallback': mapError }">
              <div v-if="mapError" class="map-fallback-content">
                <span>公司地址</span>
                <strong>{{ company.address }}</strong>
                <p>{{ BDMapInfo.address }}</p>
              </div>
            </div>
            <div class="map-note">
              <span>经度 {{ BDMapInfo.longitude }}</span>
              <span>纬度 {{ BDMapInfo.latitude }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import config from "@/config";

export default {
  name: "ContactUs",
  data() {
    return {
      BDMapInfo: config.BDMapInfo,
      company: {
        email: config.email,
        tel: config.tel,
        address: config.address
      },
      mapError: false,
      form: {
        contactName: "",
        contactPhone: "",
        contactEmail: "",
        contactContent: ""
      }
    };
  },
  mounted() {
    this.initMap();
    var wow = new WOW();
    wow.init();
  },
  methods: {
    initMap() {
      try {
        var BMap = window.BMap;
        if (!BMap || !BMap.Map) {
          this.mapError = true;
          return;
        }
        var map = new BMap.Map("map");
        var point = new BMap.Point(this.BDMapInfo.longitude, this.BDMapInfo.latitude);
        map.centerAndZoom(point, 18);
        map.enableScrollWheelZoom(true);

        var marker = new BMap.Marker(point);
        map.addOverlay(marker);

        var opts = {
          width: 180,
          height: 48,
          title: this.BDMapInfo.title
        };
        var infoWindow = new BMap.InfoWindow(this.BDMapInfo.address, opts);
        map.openInfoWindow(infoWindow, map.getCenter());
      } catch (error) {
        this.mapError = true;
      }
    },
    validContent() {
      if (!this.form.contactName) {
        this.$Message.error("请输入姓名");
        return false;
      }
      if (!this.form.contactPhone) {
        this.$Message.error("请输入联系电话");
        return false;
      }
      if (!this.form.contactContent) {
        this.$Message.error("请输入内容");
        return false;
      }
      return true;
    },
    subContent() {
      if (!this.validContent()) {
        return;
      }

      let data = {
        contactContent: this.form.contactContent,
        contactEmail: this.form.contactEmail,
        contactName: this.form.contactName,
        contactPhone: this.form.contactPhone
      };

      this.$http.post("/wx/contact/save", data).then(res => {
        if (res.data.code == 200) {
          this.$Message.success("感谢您的提交，我们会尽快与您联系");
          this.form.contactName = "";
          this.form.contactPhone = "";
          this.form.contactEmail = "";
          this.form.contactContent = "";
        } else {
          this.$Message.error(res.data.msg);
        }
      });
    }
  }
};
</script>

<style scoped>
#ContactUs {
  background:
    radial-gradient(circle at 16% 8%, rgba(32, 167, 220, .13), transparent 32%),
    linear-gradient(180deg, #f7fbff 0%, #ffffff 48%, #f4f9fe 100%);
  color: #173b5c;
}

.contact-hero {
  min-height: 260px;
  padding: 76px 0 62px;
  color: #fff;
  background:
    linear-gradient(110deg, rgba(9, 62, 116, .92), rgba(13, 99, 181, .88)),
    url("../assets/img/banner_conus.png") center center / cover no-repeat;
  position: relative;
  overflow: hidden;
}

.contact-hero::after {
  content: "";
  position: absolute;
  right: -120px;
  bottom: -160px;
  width: 420px;
  height: 420px;
  border: 1px solid rgba(255, 255, 255, .16);
  border-radius: 50%;
}

.contact-hero .container {
  position: relative;
  z-index: 1;
}

.hero-kicker,
.section-kicker {
  display: inline-flex;
  align-items: center;
  color: #1aa6c9;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-kicker {
  color: #bfe7ff;
}

.hero-kicker::before,
.section-kicker::before {
  content: "";
  width: 28px;
  height: 3px;
  margin-right: 12px;
  border-radius: 999px;
  background: currentColor;
}

.contact-hero h1 {
  margin: 18px 0 12px;
  font-size: 44px;
  font-weight: 800;
  line-height: 1.2;
}

.contact-hero p {
  max-width: 640px;
  margin: 0;
  color: rgba(255, 255, 255, .82);
  font-size: 17px;
  line-height: 1.9;
}

.contact-section {
  padding: 64px 0 86px;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr);
  gap: 28px;
  align-items: stretch;
}

.contact-panel {
  border: 1px solid rgba(13, 99, 181, .12);
  border-radius: 8px;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 22px 54px rgba(8, 45, 87, .09);
}

.contact-info-panel {
  padding: 36px;
}

.contact-info-panel h2 {
  margin: 14px 0 12px;
  color: #123b63;
  font-size: 30px;
  font-weight: 800;
  line-height: 1.35;
}

.contact-summary {
  margin: 0;
  color: #5d7286;
  font-size: 15px;
  line-height: 1.9;
}

.info-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 28px 0;
}

.info-item {
  min-height: 92px;
  padding: 16px;
  border: 1px solid rgba(13, 99, 181, .12);
  border-radius: 8px;
  background: linear-gradient(180deg, #ffffff, #f4f9ff);
}

.info-label {
  display: block;
  margin-bottom: 8px;
  color: #7a8fa3;
  font-size: 13px;
}

.info-item strong {
  display: block;
  color: #173b5c;
  font-size: 14px;
  line-height: 1.55;
  word-break: break-word;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.form-row {
  display: flex;
  flex-direction: column;
}

.form-row:nth-of-type(4) {
  grid-column: 1 / -1;
}

.form-row label {
  margin-bottom: 8px;
  color: #173b5c;
  font-size: 14px;
  font-weight: 700;
}

.zy-required::before {
  content: "*";
  margin-right: 4px;
  color: #e14d4d;
}

.form-row input,
.form-row textarea {
  width: 100%;
  border: 1px solid rgba(13, 99, 181, .16);
  border-radius: 8px;
  background: #fff;
  color: #173b5c;
  font-size: 15px;
  line-height: 1.5;
  outline: none;
  transition: border-color .2s ease, box-shadow .2s ease;
}

.form-row input {
  height: 46px;
  padding: 0 14px;
}

.form-row textarea {
  min-height: 132px;
  padding: 13px 14px;
  resize: vertical;
}

.form-row input:focus,
.form-row textarea:focus {
  border-color: #1aa6c9;
  box-shadow: 0 0 0 4px rgba(26, 166, 201, .12);
}

.submit-btn {
  grid-column: 1 / -1;
  height: 48px;
  border: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, #0d63b5, #20a7dc);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  box-shadow: 0 14px 28px rgba(13, 99, 181, .22);
  transition: transform .2s ease, box-shadow .2s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 34px rgba(13, 99, 181, .28);
}

.map-panel {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
}

.map-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  border-bottom: 1px solid rgba(13, 99, 181, .12);
  background: linear-gradient(180deg, #ffffff, #f3f9ff);
}

.map-heading span {
  color: #1aa6c9;
  font-size: 13px;
  font-weight: 800;
}

.map-heading strong {
  color: #173b5c;
  font-size: 18px;
}

#map {
  flex: 1;
  min-height: 460px;
  background: #e8f4ff;
}

.map-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background:
    linear-gradient(135deg, rgba(13, 99, 181, .08), rgba(32, 167, 220, .16)),
    #f3f9ff;
}

.map-fallback-content {
  max-width: 360px;
  text-align: center;
}

.map-fallback-content span {
  color: #1aa6c9;
  font-weight: 800;
}

.map-fallback-content strong {
  display: block;
  margin: 12px 0;
  color: #173b5c;
  font-size: 22px;
  line-height: 1.5;
}

.map-fallback-content p {
  margin: 0;
  color: #6d8296;
}

.map-note {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 16px 24px;
  border-top: 1px solid rgba(13, 99, 181, .12);
  color: #6d8296;
  font-size: 13px;
}

@media screen and (max-width: 1199px) {
  .info-list {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 991px) {
  .contact-hero {
    min-height: 220px;
    padding: 56px 0 48px;
  }

  .contact-hero h1 {
    font-size: 34px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  #map {
    min-height: 360px;
  }
}

@media screen and (max-width: 767px) {
  .contact-section {
    padding: 34px 0 54px;
  }

  .contact-info-panel {
    padding: 24px;
  }

  .contact-info-panel h2 {
    font-size: 24px;
  }

  .contact-form {
    grid-template-columns: 1fr;
  }

  .map-heading,
  .map-note {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
