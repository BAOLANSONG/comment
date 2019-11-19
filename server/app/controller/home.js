"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  //获取到首页的总数据
  async list() {
    const { ctx } = this;
    const data = await ctx.service.user.list();
    if (data) {
      ctx.body = {
        code: 0,
        data
      };
    } else {
      ctx.body = {
        code: 1,
        msg: "无数据"
      };
    }
  }
  // 登录时检测有无账号存在  // 注册账号
  async login() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const data = await ctx.service.user.login(name);
   
    if(name){
      const data = await ctx.service.user.login(name)
      if(data.length){
        ctx.body={
          code:0,
          data,
          msg:true
        }
      }else{
        ctx.body={
          code:1,
          msg:false
        }
      }
    }else{
      ctx.body={
        code:2,
        msg:"缺少参数"
      }
    }
  }

  //更改密码
  async bool() {
    const { ctx } = this;
    const { id } = ctx.query;
    const data = await ctx.service.user.bool(id);
    if (data) {
      ctx.body = {
        code: 0,
        msg: "修改此数据"
      };
    }
  }
  async yesBool() {
    const { ctx } = this;
    const { password, id } = ctx.query;
    const data = await ctx.service.user.yesBool(password, id);
    if (data) {
      ctx.body = {
        code: 0,
        msg: "修改成功"
      };
    }
  }

  //添加个人信息
  async addlist() {
    const { ctx } = this;
    const { name, password } = ctx.query;
    const data = await ctx.service.user.addlist(name, password);
    if (data) {
      ctx.body = {
        code: 0,
        msg: "添加成功"
      };
    }
  }

  //注销（删除）当前账号
  async deleteList() {
    const { ctx } = this;
    const { id } = ctx.query;
    const data = await this.app.mysql.query(id);
    if (data) {
      ctx.body = {
        code: 0,
        msg: "删除成功"
      };
    }
  }
}

module.exports = HomeController;
