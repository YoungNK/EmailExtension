import * as React from "react";
import { isEmail, isEmailWithName, findEmail } from "../utils";
import { Modal, Popover } from "antd";
import { Input } from "antd";

const { TextArea } = Input;

export default class EmailContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    };
  }

  listChange = (data, checkReapeat) => {
    let { dataChange } = this.props;
    if (!checkReapeat) {
      dataChange(data);
      return;
    }
    let tmp = {};
    let res = [];
    let repeat = [];
    data.map(value => {
      let email = findEmail(value);
      if (email in tmp) {
        repeat.push(value);
      } else {
        tmp[email] = value;
        res.push(value);
      }
    });
    if (repeat.length > 0) {
      Modal.warning({
        title: "联系人重复",
        content: repeat.join(",") + "重复"
      });
    }
    dataChange(res);
  };

  ins = (
    <div className="con-ins d-flex flex-column">
      <p style={{padding:'15px 0'}}>{`邮箱支持 "shaozhaoyang@jd.com" 或者 "邵朝阳 <shaozhaoyang@jd.com>"两种格式，多条时用 "," 分隔,示例如下`}</p>
      <TextArea
      autosize
        value={
          "张庆锋 <zhangqingfeng11@jd.com>,石强 <shiqiang@jd.com>,张敏 <zhangmin5@jd.com>,李雪 <lixue3@jd.com>,郭江江 <guojiangjiang@jd.com>,陈东伟 <chendongwei1@jd.com>,邵朝阳 <shaozhaoyang@jd.com>,常志峰 <changzhifeng@jd.com>,祝鹤源 <zhuheyuan@jd.com>,刘须华 <liuxuhua@jd.com>,张维维 <zhangweiwei6@jd.com>,叶纪峰 <yejifeng@jd.com>,陈丽萍 <chenliping5@jd.com>"
        }
      />
    </div>
  );

  render() {
    let { temp } = this.state;
    let { list = [], title = "联系人" } = this.props;
    return (
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <div style={{ fontWeight: "bold", margin: "10px 0" }}>{title}</div>
          <Popover
            placement="topLeft"
            title={"添加示例"}
            content={this.ins}
            trigger="click"
            width={400}
          >
            <a>添加示例</a>
          </Popover>
        </div>
        <div className="d-flex email-con flex-wrap">
          {list.map((value, index) => (
            <div className="con-item-box d-flex">
              <div className="con-con">{value}</div>
              <a
                className="con-item-delete"
                onClick={() => {
                  list.splice(index, 1);
                  this.listChange(list);
                }}
              >
                删除
              </a>
            </div>
          ))}
          <input
            className="con-input"
            onChange={e => {
              let value = e.target.value;
              let spliter = "";
              if (value.indexOf(",") > -1) {
                spliter = ",";
              } else if (value.indexOf(";") > -1) {
                spliter = ";";
              }
              let newList = [],
                notList = [];
              if (spliter) {
                newList = value.split(spliter);
              } else {
                if (
                  value.indexOf(" ") > 0 ||
                  value.indexOf(";") > 0 ||
                  value.indexOf(",") > 0 ||
                  isEmailWithName(value.trim())
                ) {
                  newList = [value];
                } else {
                  notList.push(value.trim());
                }
              }
              newList.map(value => {
                if (isEmail(value.trim()) || isEmailWithName(value.trim())) {
                  list.push(value.trim());
                } else {
                  notList.push(value.trim());
                }
              });
              this.listChange(list, true);
              this.setState({
                temp: notList.join(spliter)
              });
            }}
            value={temp}
          />
        </div>
      </div>
    );
  }
}
