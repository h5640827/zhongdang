<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_2_white_text.d61225c.png" alt="logo图">
    </div>
    
    <div id="description" class="row">
      <div id="company_1" class="col-md-3">
        <p class="title">广东公司</p>
        <p class="address_tel_fax">
          <p>地址：{{config.address}}</p>
          <!-- <p>
            热线：{{config.phone}}
            <span>&nbsp;&nbsp;电话：{{config.tel}}</span>
          </p> -->
          <!-- <p style="font-size: 16px;">业务中心：湛江市、阳江市、茂名市</p> -->
        </p>
      </div>
      
      <div id="company_2" class="col-md-3">
        <p class="title">广西公司</p>
        <p class="address_tel_fax">
          <p>地址：中国（广西）自由贸易试验区南宁片区平乐大道21号大唐总部1号楼13层</p>
          <!-- <p>
            热线：15678898817
            <span>&nbsp;&nbsp;电话：0771-20825665</span>
          </p> -->
          <!-- <p style="font-size: 16px;">业务中心：来宾市、玉林市</p> -->
        </p>
      </div>

      <div id="company_3" class="col-md-3">
        <p class="title">海南公司</p>
        <p class="address_tel_fax">
          <p>地址：海南省海口市琼山区国兴大道22号天盈广场708</p>
          <!-- <p>
            热线：18078181983
            <span>&nbsp;&nbsp;电话：{{config.tel}}</span>
          </p> -->
        </p>
      </div>

      <div id="company_4" class="col-md-3">
        <p class="title">珠海公司</p>
        <p class="address_tel_fax">
          <p>地址：广东省珠海市香洲区立体科技大厦（东门）5楼研发中心</p>
          <!-- <p>
            热线：0759-2507274
          </p> -->
        </p>
      </div>

    </div>

    <div class="container" style="margin-top: 20px;">
      <div class="row justify-content-around">
        
        <div class="qr-div col-xs-12 col-md-2">
          <img src="@/assets/img/qr/company.png" alt="二维码">
          <p>企业微信</p>
        </div>
        <div class="qr-div col-xs-12 col-md-2">
          <img src="@/assets/img/qr/xiaohongshu.png" alt="二维码">
          <p>小红书</p>
        </div>
        <div class="qr-div col-xs-12 col-md-2">
          <img src="@/assets/img/qr/douyin.png" alt="二维码">
          <p>抖音</p>
        </div>
        <div class="qr-div col-xs-12 col-md-2">
          <img src="@/assets/img/qr/mp.png" alt="二维码">
          <p>公众号</p>
        </div>
        <div class="qr-div col-xs-12 col-md-2">
          <img src="@/assets/img/qr/mp.png" alt="二维码">
          <p>视频号</p>
        </div>
      </div>
    </div>

      <div class="footer-bottom">
        <p class="copy">
        <span>邮箱：{{config.email}}</span>
        <span>热线：0759-2218817&nbsp;0771-2082565&nbsp;0898-36323536</span>
        <span>投诉电话：15678898817</span>
        </p>
        <p class="footer-legal">
          <span>Copyright &copy; 2015 - 2024 中档信息集团有限公司</span>
          <a href="http://beian.miit.gov.cn" target="_blank">粤ICP备2024272921号-1</a>
        </p>
      </div>

  </div>
</template>
<script>
import config from '@/config'
export default {
  name: "Footer",
  data() {
    return {
      config: config
    };
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 34px 0 24px;
  background: linear-gradient(135deg, #081b31 0%, #0f3561 58%, #0c5d9c 100%);
}
.logo {
  width: 330px;
  height: auto;
  margin: 0 auto 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo img {
  margin: 0;
  width: 230px;
  height: auto;
}

.qr-div {
  width: 150px;
  height: auto;
  margin: 0 22px 18px;
  position: relative;
  text-align: center;
}

.qr-div img {
  width: 136px;
  height: 136px;
  padding: 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.16);
}
.qr-div p {
  width: 100%;
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.86);
  text-align: center;
}
#description {
  width: 1170px;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 20px 0 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.title {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
}
.address_tel_fax {
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  line-height: 1.8;
  margin: 10px 0 18px;
}
.email_wx {
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
}
.footer-bottom {
  width: 1170px;
  max-width: calc(100% - 48px);
  margin: 24px auto 0;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}
.copy,
.footer-legal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  line-height: 1.8;
  margin: 0;
  padding: 0;
}
.copy {
  gap: 8px 22px;
  margin-bottom: 8px;
}
.footer-legal {
  gap: 8px 16px;
  color: rgba(255, 255, 255, 0.58);
}
.footer-legal a {
  color: rgba(255, 255, 255, 0.72) !important;
}
#footer a {
  color: rgba(255, 255, 255, 0.86) !important;
}
#footer a:hover {
  color: #80d8ff !important;
  text-decoration: none;
}
@media screen and (max-width: 997px) {
  #footer {
    padding: 28px 0 20px;
  }
  #description {
    max-width: calc(100% - 30px);
    text-align: center;
  }
  .title {
    font-size: 18px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

    font-size: 12px;
  }
  .qr-div {
    width: 100%;
    margin: 0 0 18px;
  }
  .qr-div img {
    width: 118px;
    height: 118px;
  }
  .footer-bottom {
    max-width: calc(100% - 30px);
    margin-top: 20px;
  }
  .copy,
  .footer-legal {
    display: block;
  }
  .copy span,
  .footer-legal span,
  .footer-legal a {
    display: block;
    margin-bottom: 4px;
  }
}
</style>

<div id="coze-target" style="width: 380px; height: 600px;"></div>
