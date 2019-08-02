import * as React from "react";
import { timeFormate, loadFromStorage, storeData, getOS } from "../utils";
import Sign from "./Sign";
import { Input, Icon, Modal, Table } from "antd";
import Item from "./Item";
import EmailContacts from "./EamilContacts";
import ItemBottom from "./ItemBottom";
import About from "./About";
import TableEmail from './TableEmail';
const placeholder = "每行一个条目 行首无空格展示为一级行 加空格为次级行";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    let time = this.getMondayAndFriday();
    let isSameYear = time.monStr[0] === time.friStr[0];
    let local = loadFromStorage();
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
    let { cc = [], receivers = [] } = this.state;
    let seprater = getOS().indexOf("Win") === 0 ? ";" : ",";
    let ccStr = cc.join(seprater);
    let receiversStr = receivers.join(seprater);
    return `mailto:${receiversStr}?subject=${this.getSubject()}&cc=${ccStr}`;
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
    Modal.success({
      title: "提示",
      content: "邮件内容已经复制到剪切板，粘贴在邮件内容框中即可"
    });
  };

  dealData = data => {
    storeData(data);
    this.setState(data);
  };

  commonChange = (e, name) => {
    let res = {};
    res[name] = e.target.value;
    this.dealData(res);
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
    this.state.programs.push({res:'',plan:'',title:'', newSync: ''});
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

  ccChange = data => {
    this.dealData({ cc: data });
  };
  receiversChange = data => {
    this.dealData({ receivers: data });
  };

  render() {
    let {
      name,
      leader,
      department,
      email,
      phone,
      departmentFull,
      programs = [],
      cc = [],
      receivers = [],
      needSyncMatter = "",
      experienceShare = "",
      underSolving = "",
      suggestions = ""
    } = this.state;
    this.getSubject();
    return (
      <div className="d-flex">
        <div className="left d-flex flex-column flex-fill">
          <EmailContacts
            dataChange={this.receiversChange}
            list={receivers}
            title={"收件人："}
          />
          <EmailContacts
            dataChange={this.ccChange}
            list={cc}
            title={"抄送："}
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
            <Item
              index={index}
              data={value}
              dataChange={this.dataChange}
              placeholder={placeholder}
            />
          ))}

          <a onClick={this.addProgram} className="addButton">
            <Icon type="plus" />
            添加一个项目
          </a>

          <ItemBottom
            title="工作经验分享"
            placeholder={placeholder}
            dataChange={this.commonChange}
            data={needSyncMatter}
            name={"needSyncMatter"}
          />
          <ItemBottom
            title="待解决、求助"
            placeholder={placeholder}
            dataChange={this.commonChange}
            data={underSolving}
            name={"underSolving"}
          />
          <ItemBottom
            title="建议"
            placeholder={placeholder}
            dataChange={this.commonChange}
            data={suggestions}
            name={"suggestions"}
          />

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
          <About />
        </div>
        <div className="d-flex flex-column">
          <a
            href={this.getHref()}
            onClick={this.send}
            className="addButton send-button"
          >
            发送邮件
          </a>
          <div className="d-flex flex-column" id="tableRes">
            <div className="divcss5">
            <TableEmail {...this.state}/>
             </div>
            <Sign
              name={name}
              email={email}
              phone={phone}
              departmentFull={departmentFull}
            />
          </div>
        </div>
      </div>
    );
  }
}
