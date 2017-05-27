'use strict';

layui.define(['laytpl'], function (exports) {
  var laytpl = layui.laytpl;

  function _view(params) {
    var _this = this
      , before = null;

    // HTML模版
    _this.template = params.template;

    // 模板引擎数据
    _this.data = params.data || {};

    // 模版渲染之前执行函数
    _this.before = params.before;

    // 模版渲染完成执行函数
    _this.complete = params.complete;

    // 添加dom元素事件，每次模版渲染完成都会执行该函数
    _this.event = params.event;


    // 当是
    before = _this.before && _this.before();

    if (before) {
      before.then(function () {
        _this.render();
        _this.complete && _this.complete();
      })
    } else {
      _this.render();
      _this.complete && _this.complete();
    }
  }

  /**
   * 渲染模版
   * @param data
   * @param callback
   */
  _view.prototype.render = function (data, callback) {
    var _this = this;

    data = _.extend(_this.data, data);

    laytpl(_this.template).render(data, function (html) {
      $('#dx-template').html(html);
      callback && callback();
      _this.event && _this.event();
    });
  };


  //输出view接口
  exports('_view', _view);
});