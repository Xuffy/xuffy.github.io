'use strict';

layui.use(['form', 'laypage', '_route', '_ajax', '_view'], function () {
  var form = layui.form()
    , laypage = layui.laypage
    , _route = layui._route
    , _ajax = layui._ajax
    , layer = layui.layer;

  // 初始化当前位置
  _route.setBreadcrumb(['后台用户管理', '后台用户']);

  // 视图渲染
  var _view = new layui._view({
    template: "<!--样式-->\r\n<style></style>\r\n\r\n<section class=\"dx-list-default\">\r\n  <div class=\"dx-operation-bar\">\r\n    <form class=\"layui-form\">\r\n\r\n      <div class=\"layui-form-item\">\r\n        <div class=\"layui-input-inline\">\r\n          <input type=\"tel\" name=\"username\" lay-verify=\"username\" placeholder=\"请输入用户名称\" autocomplete=\"off\"\r\n                 class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"layui-form-item\">\r\n        <div class=\"layui-input-inline\">\r\n          <input type=\"tel\" name=\"phone\" lay-verify=\"phone\" placeholder=\"请输入联系方式\" autocomplete=\"off\"\r\n                 class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"layui-form-item\">\r\n        <div class=\"layui-input-block\">\r\n          <select name=\"role\">\r\n            <option value=\"\">请选择角色</option>\r\n            <option value=\"1\">超级管理员</option>\r\n            <option value=\"2\">运营</option>\r\n            <option value=\"3\">客服</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"layui-form-item\">\r\n        <div class=\"layui-input-block\">\r\n          <button class=\"layui-btn btn-yellow\" lay-submit=\"\" lay-filter=\"search\">查询</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <div class=\"layui-form-item item-right\">\r\n      <div class=\"layui-input-block\">\r\n        <button class=\"layui-btn btn-simple-blue layui-btn-primary\" id=\"add\" dx-type=\"add\" style=\"font-weight: bold\">\r\n          <i class=\"iconfont icon-jia\"></i>新增\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <table class=\"layui-table\">\r\n    <thead>\r\n    <tr>\r\n      <th>账户名称</th>\r\n      <th>姓名</th>\r\n      <th>角色</th>\r\n      <th>部门</th>\r\n      <th>联系方式</th>\r\n      <th class=\"table-operation-box\">操作</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n    {{# layui.each(d.list, function(index, item){ }}\r\n    <tr>\r\n      <td>{{item.user}}</td>\r\n      <td>兰冲</td>\r\n      <td>超级管理员</td>\r\n      <td>客服部</td>\r\n      <td>13578899767</td>\r\n      <td class=\"table-operation-box\">\r\n        <span class=\"table-operation user-info\" dx-type=\"info\"><i class=\"iconfont icon-chakan\"></i></span>\r\n        <span class=\"table-operation user-update\" dx-type=\"update\"><i class=\"iconfont icon-xiugai\"></i></span>\r\n        <span class=\"table-operation user-ban\"><i class=\"iconfont icon-101\"></i></span>\r\n      </td>\r\n    </tr>\r\n    {{# }); }}\r\n    </tbody>\r\n  </table>\r\n\r\n  <div id=\"dx-page-default\" class=\"dx-page-default\"></div>\r\n\r\n</section>",
    data: {
      list: [],
      pageSize: 0
    },
    before: function () {
      var _this = this;
      return _ajax.get({url: 'test?a=1'}).then(function (data) {
        _this.data.list = data.list;
        _this.data.pageSize = data.pageSize;
      });
    },
    event: addEvent
  });


  // 自定义验证规则
  form.verify({
    username: function (value) {
      if (value.length > 20) {
        return '用户名称过长，请重新输入';
      }
    },
    phone: function (value) {
      if (value && (value.length > 11 || value.length < 6)) {
        return '请输入正确的联系方式';
      }
    }
  });

  // 事件监听
  function addEvent() {
    // 渲染表单
    form.render();

    // 分页初始化
    laypage({
      cont: 'dx-page-default'
      , pages: _view.data.pageSize
      , first: 1
      , skin: '#6a96df'
      , jump: function (data) {
        layer.msg('显示第' + data.curr + '页');
      }
    });

    // 监听增加按钮
    $('#add,.user-info,.user-update').on('click', function () {
      _route.go('backstage.user.info', {type: $(this).attr('dx-type')});
    });

    // 监听禁用按钮
    $('.user-ban').on('click', function () {
      layer.confirm('确定禁用此账户吗？', {
        btn: ['确定', '取消'] //可以无限个按钮
      }, function (index, layero) {
        layer.msg('禁用了')
      });
    });

    // 监听提交按钮
    form.on('submit(search)', function (data) {
      layer.alert(JSON.stringify(data.field), {
        title: '最终的提交信息'
      });
      return false;
    });
  }

});