import * as React from "react";
import { timeFormate } from "../utils";
import Sign from "./Sign";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    let time = this.getMondayAndFriday();
    let isSameYear = time.monStr[0] === time.friStr[0];
    this.state = {
      name: "邵朝阳",
      leader: "张鑫",
      department: "传媒研发部",
      email: "shaozhaoyang@jd.com",
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
    return `mailto:aa<sample@163.com>?subject=${this.getSubject()}&cc=sample@hotmail.com&body=<html></html>`;
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
      email
    } = this.state;
    this.getSubject();
    return (
      <div className="d-flex">
        <div className="left">
          <a href={this.getHref()} onClick={this.send} className="send">
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
                <tr>
                  <td className="name info blue">工作项目</td>
                  <td className="content info">
                    <p>本周结果</p>
                    <p>本周结果</p>
                    <p>本周结果</p>
                    <p>本周结果</p>
                    <p>本周结果</p>
                  </td>
                  <td className="content info">下周计划</td>
                </tr>
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
          <Sign name={name} email={email} />
        </div>
      </div>
    );
  }
}
