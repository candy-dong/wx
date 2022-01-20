// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getInfo()
        this.postInfo()
    },
    getInfo() {
        wx.request({
          url:'https://www.escook.cn/api/get',
          method:'GET',
          data:{
            name:'zs',
            age:25
          },
          success: (res) => {
            console.log(res)
          }
        })
      },
      postInfo() {
        wx.request({
          url:'https://www.escook.cn/api/post',
          method:'POST',
          data:{
            name:'ls',
            age:20
          },
          success: (res) => {
            console.log(res)
          }
        })
      },
})