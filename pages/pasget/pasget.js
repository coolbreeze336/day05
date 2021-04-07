// pages/pasget/pasget.js
const app = getApp()
Page({
  data: {
    meat:['未缴明细','缴费记录','缴费标准','申请收据'],
    name:[
      {
        text:"重修学费（1000元/次）",
        nam:"应缴金额:",
        num:"4000",
        nam2:"未缴费金额:",
        num2:"953.00",
        nam3:"",
        num3:"",
      },
      {
        text:"缴费记录（1000元/次）",
        nam:"缴费单号:",
        num:"123789456789",
        nam2:"缴费金额:",
        num2:"1315.00",
        nam3:"缴费日期:",
        num3:"2021-03-26 09:24:58",
      },
      {
        text:"缴费标准（1000元/次）",
        nam:"应缴金额",
        num:"应缴金额:100.00",
        nam2:"体检费",
        num2:"130.00",
        nam3:"校服",
        num3:"450.00",
      },
      {
        text:"申请收据（1000元/次）",
        nam:"提醒消息:",
        num:"暂无收据数据",
        nam2:"",
        num2:"",
        nam3:"",
        num3:"",
      }
    ],
    num:"",
  },
  tad(e){
    let index = e.currentTarget.dataset.index;
    this.data.num = index;
    // this.data.meat.splice(index,1);
  this.setData({
    // meat:this.data.meat,
    num:this.data.num,
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})