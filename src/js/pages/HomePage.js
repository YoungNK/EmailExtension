import * as React from "react";
import { timeFormate, loadFromStorage, storeData } from "../utils";
import Sign from "./Sign";
import { Input } from "antd";
import Item from "./Item";
const { TextArea } = Input;
const placeholder = "每行一个条目 行首无空格展示为一级行 加空格为次级行";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    let time = this.getMondayAndFriday();
    let isSameYear = time.monStr[0] === time.friStr[0];
    let local = loadFromStorage();
    if (!local.programs || local.programs.length < 1) {
      local.programs = [{}];
    }
    this.state = {
      ...local,
      isSameYear,
      monYear: time.monStr[0],
      monMonth: time.monStr[1],
      monDay: time.monStr[2],
      friYear: time.friStr[0],
      friMonth: time.friStr[1],
      friDay: time.friStr[2]
    };
  }

  getMondayAndFriday = () => {
    let today = new Date();
    let weekday = today.getDay();
    weekday = weekday === 0 ? 7 : weekday;
    let monday = new Date(
      1000 * 60 * 60 * 24 * (1 - weekday) + today.getTime()
    );
    let friday = new Date(
      1000 * 60 * 60 * 24 * (5 - weekday) + today.getTime()
    );
    let monStr = timeFormate(monday, "YYYY-MM-DD");
    let friStr = timeFormate(friday, "YYYY-MM-DD");
    let state = { monStr: monStr.split("-"), friStr: friStr.split("-") };
    return state;
  };

  getSubject = () => {
    let {
      name,
      monYear,
      monMonth,
      monDay,
      friYear,
      friMonth,
      friDay
    } = this.state;
    return `工作周报-${name}-${monYear}/${monMonth}/${monDay}~${friYear}/${friMonth}/${friDay}`;
  };

  getHref = () => {
    return `mailto:aa<sample@163.com>?subject=${this.getSubject()}&cc=张庆锋 <zhangqingfeng11@jd.com>, Rowen SUN孙歌 <sunge@jd.com>, 李雪 <lixue3@jd.com>, 石强 <shiqiang@jd.com>, 吴燕峰 <wuyanfeng@jd.com>, 张敏 <zhangmin5@jd.com>, 赵钦 <zhaoqin5@jd.com>, 陈东伟 <chendongwei1@jd.com>, 张维维 <zhangweiwei6@jd.com>, 叶纪峰 <yejifeng@jd.com>, 刘鹏 <liupeng30@jd.com>, 刘须华 <liuxuhua@jd.com>, 祝鹤源 <zhuheyuan@jd.com>, 陈丽萍 <chenliping5@jd.com>, 赵庆礼 <zhaoqingli@jd.com>, 邵朝阳 <shaozhaoyang@jd.com>, 常志峰 <changzhifeng@jd.com>, 王月阳 <wangyueyang@jd.com>`;
  };

  send = () => {
    var text = document.getElementById("tableRes");
    if (document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      alert("none");
    }
    document.execCommand("Copy", "false", null);
  };

  dealData = data => {
    storeData(data);
    this.setState(data);
  };

  nameChange = val => {
    this.dealData({
      name: val.target.value
    });
  };

  leaderNameChange = val => {
    this.dealData({
      leader: val.target.value
    });
  };

  departmentChange = val => {
    this.dealData({
      department: val.target.value
    });
  };
  departmentFullChange = val => {
    this.dealData({
      departmentFull: val.target.value
    });
  };

  numberChange = val => {
    this.dealData({
      phone: val.target.value
    });
  };

  emailChange = val => {
    this.dealData({
      email: val.target.value
    });
  };
  addProgram = () => {
    this.state.programs.push({});
    this.dealData({ programs: this.state.programs });
  };

  dataChange = (index, data) => {
    if (data.delete && this.state.programs.length > index) {
      this.state.programs.splice(index, 1);
    } else {
      this.state.programs[index] = data;
    }
    this.dealData({ programs: this.state.programs });
  };

  render() {
    let {
      name,
      leader,
      department,
      isSameYear,
      monYear,
      monMonth,
      monDay,
      friYear,
      friMonth,
      friDay,
      email,
      phone,
      departmentFull,
      programs = []
    } = this.state;
    this.getSubject();
    return (
      <div className="d-flex">
        <div className="left d-flex flex-column flex-fill">
          <TextArea
            addonBefore="收件人"
            placeholder="请输入收件人"
            value={name}
            onChange={this.nameChange}
          />
          <Input
            addonBefore="姓名"
            placeholder="请输入姓名"
            value={name}
            onChange={this.nameChange}
          />
          <Input
            addonBefore="领导"
            placeholder="请输入领导姓名"
            value={leader}
            onChange={this.leaderNameChange}
          />

          <Input
            addonBefore="部门"
            value={department}
            onChange={this.departmentChange}
          />

          {programs.map((value, index) => (
            <Item index={index} data={value} dataChange={this.dataChange} placeholder={placeholder}/>
          ))}

          <a onClick={this.addProgram} className="addButton">
            添加一个项目
          </a>

          <Input
            addonBefore="电话"
            placeholder="请输入电话号码"
            value={phone}
            onChange={this.numberChange}
          />
          <Input
            addonBefore="邮箱"
            placeholder="请输入电子邮箱"
            value={email}
            onChange={this.emailChange}
          />
          <Input
            addonBefore={"完整部门名称"}
            placeholder="请输入签名部分完整部门名称"
            autosize
            value={departmentFull}
            onChange={this.departmentFullChange}
          />
          <a href={this.getHref()} onClick={this.send} className="addButton">
            发送邮件
          </a>
        </div>
        <div className="d-flex flex-column" id="tableRes">
          <div className="divcss5">
            <table width="950px" border="0" cellSpacing="1" cellPadding="0">
              <thead>
                <tr>
                  <th colSpan="3">
                    <div>
                      <div className="title">{department}</div>
                      <div className="sub-title">
                        工作情况汇报（{monYear}年{monMonth}月{monDay}日-
                        {isSameYear ? "" : friYear + "年"}
                        {friMonth}月{friDay}日)
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3">
                    <div className="info bd">
                      <span>报告人：{name}</span>
                      <span>直接领导：{leader}</span>
                      <span>所属部门： {department} </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name bg-y info">工作项目</td>
                  <td className="content bg-y info bd">本周结果</td>
                  <td className="content bg-y info bd">下周计划</td>
                </tr>
                {programs.map(value => {
                  return (
                    <tr>
                      <td className="name info blue">{value.title}</td>
                      <td className="content info">
                        {value.res &&
                          value.res.split("\n").map(value => {
                            let classNameStr =
                              value.indexOf(" ") === 0
                                ? "item-desc"
                                : "item-title";
                            return <div className={classNameStr}>{value}</div>;
                          })}
                      </td>
                      <td className="content info">
                        {value.plan &&
                          value.plan.split("\n").map(value => {
                            let classNameStr =
                              value.indexOf(" ") === 0
                                ? "item-desc"
                                : "item-title";
                            return <div className={classNameStr}>{value}</div>;
                          })}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td
                    colSpan="3"
                    className="bg-y info bd"
                    style={{ textAlign: "center" }}
                  >
                    没有最好、只有更好！
                  </td>
                </tr>
                <tr>
                  <td className="name info">需要协同的事项</td>
                  <td colSpan="2" className="info" />
                </tr>
                <tr>
                  <td className="name info">工作经验分享</td>
                  <td colSpan="2" className="info" />
                </tr>
                <tr>
                  <td className="name info">待解决、求助</td>
                  <td colSpan="2" className="info" />
                </tr>
                <tr>
                  <td className="name info">建议</td>
                  <td colSpan="2" className="info" />
                </tr>
              </tbody>
            </table>
          </div>
          <Sign
            name={name}
            email={email}
            phone={phone}
            departmentFull={departmentFull}
          />
        </div>
      </div>
    );
  }
}
