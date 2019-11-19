'use strict';

const Service = require("egg").Service  //service不需要结构

class UserService extends Service{
    //总数据
    async list(){
        const data = await this.app.mysql.query("select * from list")
        return data
    }
    // 登录时检测有无账号存在  // 注册账号
    async login(name){
      console.log(name)
        const $sql = "select * from login where name=?"
        const data = await this.app.mysql.query($sql,[name])
        console.log(data)
        return data
    }
    //更改密码
    async bool(id){
        const $sql = "select * from login where id=?"
        const data = await this.app.mysql.query($sql,[id])
       return data
    }
    async yesBool(password,id){
        const $sql = "update login set password=? where id=?"
        const data = await this.app.mysql.query($sql,[password,id])
        return data
    }
    //添加个人信息
  async addlist(name,password){
    const $sql = "insert into login (name,password) values (?,?)"
    const data = await this.app.mysql.query($sql,[name,password])
    return data
  }

  //注销（删除）当前账号
  async deleteList(id){
    const $sql = "delete from login where id=?"
    const data = await this.app.mysql.query($sql,[id])
    return data
  }
}

module.exports=UserService