// components/header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    headerBack: function () {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
