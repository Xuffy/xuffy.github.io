'use strict';

layui.use(['_route', 'form', '_view'], function () {
  var _route = layui._route
    , form = layui.form()
    , curPosition = ''
    , boxEle = $('.dx-info-box');



  // 视图渲染
  var _view = new layui._view({
    template: "<section class=\"dx-info-default\">\r\n  <div class=\"dx-info-box\">\r\n    <form class=\"layui-form\" action=\"\">\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">账户名称</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <input type=\"text\" name=\"user\" lay-verify=\"required\" autocomplete=\"off\" placeholder=\"\" class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">姓名</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <input type=\"text\" name=\"name\" lay-verify=\"required\" placeholder=\"\" autocomplete=\"off\" class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">性别</label>\r\n        <div class=\"layui-input-block\">\r\n          <input type=\"radio\" name=\"sex\" value=\"男\" title=\"男\" checked=\"\">\r\n          <input type=\"radio\" name=\"sex\" value=\"女\" title=\"女\">\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">手机</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <input type=\"text\" name=\"phone\" lay-verify=\"required\" placeholder=\"\" autocomplete=\"off\" class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">邮箱</label>\r\n        <div class=\"layui-input-block\">\r\n          <input type=\"text\" name=\"email\" placeholder=\"\" autocomplete=\"off\" class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">所属角色</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <select name=\"role\">\r\n            <option value=\"\">选择角色</option>\r\n            <option value=\"0\">角色A</option>\r\n            <option value=\"1\">角色B</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">所属部门</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <input type=\"text\" name=\"department\" lay-verify=\"required\" placeholder=\"\" autocomplete=\"off\"\r\n                 class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">职务</label>\r\n        <div class=\"layui-input-block\">\r\n          <input type=\"text\" name=\"duties\" placeholder=\"\" autocomplete=\"off\" class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">密码</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <input type=\"password\" name=\"password\" lay-verify=\"required\" autocomplete=\"off\" placeholder=\"\"\r\n                 class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <div class=\"layui-form-item\">\r\n        <label class=\"layui-form-label\">确认密码</label>\r\n        <div class=\"layui-input-block dx-input-required\">\r\n          <input type=\"password\" name=\"confirmPassword\" lay-verify=\"required\" placeholder=\"\" autocomplete=\"off\"\r\n                 class=\"layui-input\">\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"layui-form-item form-btn-box\">\r\n        <div class=\"layui-input-block\">\r\n          <button type=\"button\" class=\"layui-btn layui-btn-primary btn-simple-blue add-hide\">取消</button>\r\n          <button type=\"reset\" class=\"layui-btn layui-btn-primary btn-simple-blue update-hide\">重置</button>\r\n          <button class=\"layui-btn dx-btn-theme\" lay-submit=\"\" lay-filter=\"info\">提交</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>",
    event: addEvent
  });

  // 自定义验证规则
  form.verify({
    /*title: function (value) {
     if (value.length < 5) {
     return '标题至少得5个字符啊';
     }
     }
     , pass: [/(.+){6,12}$/, '密码必须6到12位']
     , content: function (value) {
     layedit.sync(editIndex);
     }*/
  });


  function addEvent() {
    // 渲染表单
    form.render();
    // 状态判断
    switch (_route.params.type) {
      case 'add':
        curPosition = '新增';
        boxEle.addClass('type-add');
        break;
      case 'update':
        curPosition = '修改';
        boxEle.addClass('type-update');
        break;
      case 'info':
        curPosition = '查看';
        boxEle.addClass('type-info').find('input,select').attr('disabled', 'disabled');
        break;
    }

    // 初始化当前位置
    _route.setBreadcrumb(['后台用户管理', {url: 'backstage.user', name: '后台用户'}, curPosition]);

    //监听提交
    form.on('submit(info)', function (data) {
      layer.alert(JSON.stringify(data.field), {
        title: '最终的提交信息'
      });
      return false;
    });
  }


});