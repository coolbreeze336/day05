// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    route:[
      {
        "url":"/pages/routerjf/routerjf",
        "text":"综合积分",
        "img":"/img/jif.png",
      },
      {
        "url":"/pages/router2/router2",
        "text":"老师评语",
        "img":"/img/pl.png"
      },
      {
        "url":"/pages/router3/router3",
        "text":"获得奖励",
        "img":"/img/lw.png"
      },
      {
        "url":"/pages/router4/router4",
        "text":"考试成绩",
        "img":"/img/cj.png"
      },
      {
        "url":"/pages/router5/router5",
        "text":"学籍信息",
        "img":"/img/xx.png"
      }
    ],
    img:['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg22.pxto.com.cn%2Feditor%2F1911%2F20%2F5dd4a4114fb05.jpg&refer=http%3A%2F%2Fimg22.pxto.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620294151&t=361f0732efdc27aeab92a45273f2ce27','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg22.pxto.com.cn%2Feditor%2F1911%2F20%2F5dd4a4114fb05.jpg&refer=http%3A%2F%2Fimg22.pxto.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620294151&t=361f0732efdc27aeab92a45273f2ce27','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg22.pxto.com.cn%2Feditor%2F1911%2F20%2F5dd4a4114fb05.jpg&refer=http%3A%2F%2Fimg22.pxto.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620294151&t=361f0732efdc27aeab92a45273f2ce27'],
    list:[
      {
        "num":"1",
        "name":"上午第一节课",
        "img":"/img.gwc.png"
      },
      {
        "num":"2",
        "name":"仿佛是",
        "img":"/img.gwc1.png"
      },
      {
        "num":"3",
        "name":"是十三",
        "img":"/img.sy.png"
      },
      {
        "num":"4",
        "name":"高如特",
        "img":"/img.sy1.png"
      },
    ],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
