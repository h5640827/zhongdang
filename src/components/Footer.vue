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
        
        <div id="qr_div" class="col-xs-12 col-md-2">
          <img src="@/assets/img/qr/company.png" alt="二维码">
          <p>企业微信</p>
        </div>
        <div id="qr_div" class="col-xs-12 col-md-2">
          <img src="@/assets/img/qr/xiaohongshu.png" alt="二维码">
          <p>小红书</p>
        </div>
        <div id="qr_div" class="col-xs-12 col-md-2">
          <img src="@/assets/img/qr/douyin.png" alt="二维码">
          <p>抖音</p>
        </div>
        <div id="qr_div" class="col-xs-12 col-md-2">
          <img src="@/assets/img/qr/mp.png" alt="二维码">
          <p>公众号</p>
        </div>
        <div id="qr_div" class="col-xs-12 col-md-2">
          <img src="@/assets/img/qr/mp.png" alt="二维码">
          <p>视频号</p>
        </div>
      </div>
    </div>

      <div>
        <p class="copy">
        <span>邮箱：{{config.email}}</span>
        <span>&nbsp;&nbsp;热线：0759-2218817&nbsp;0771-2082565&nbsp;0898-36323536</span>
        <span>&nbsp;&nbsp;投诉电话：15678898817</span>
        <span>&nbsp;&nbsp;Copyright &copy; 2015 - 2024  中档信息集团有限公司</span>
        </p>
        <p><a href="http://beian.miit.gov.cn" target="_blank"  style="color: #fff;">粤ICP备2024272921号-1</a></p>
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
  background: #474747;
}
.logo {
  width: 330px;
  height: auto;
  margin: 2px auto 10px;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo img {
  margin: 10px;
  width: 220px;
  height: auto;
}

#qr_div {
  /* display: table-cell; */
    width: 150px;
    height: auto;
    margin-left: 30px;
    margin-right: 30px;
    position: relative;
}

#qr_div img {
    width: 150px;
    height: 150px;
    /* vertical-align: middle   */
}
#qr_div p {
    position: absolute;
    width: 100%;
    bottom: 3;
    text-align: center;
}
/* #description {
  font-size: 15px;
} */
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 12px;
  margin: 30px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

    font-size: 12px;
  }
}
</style>

<div id="coze-target" style="width: 380px; height: 600px;"></div>