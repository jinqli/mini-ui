// pages/stylesm/basic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerTitle: "Mini UI",
    list: [
      { text: "Button 按钮", path: "button" },
      { text: "Icon 图标", path: "icon" },
      { text: "Text 文本", path: "text" },
      { text: "Tag 标签", path: "tag" },
      { text: "Badge 徽章", path: "badge" },
      { text: "Loading 加载", path: "loading" },
      { text: "Avatar 头像", path: "avatar" },
    ]
  },

  navigate: function (e) {
    wx.navigateTo({
      url: `/pages/stylesm/basic/${e.currentTarget.dataset.path}/index`,
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