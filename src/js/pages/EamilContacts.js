import * as React from "react";
import { isEmail, isEmailWithName, findEmail } from "../utils";
import { Modal } from "antd";

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

  render() {
    let { temp } = this.state;
    let { list = [], title = "联系人" } = this.props;
    return (
      <div className="d-flex flex-column">
        <div style={{ fontWeight: "bold", margin: "10px 0" }}>{title}</div>
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
                  notList.push(value);
                }
              }
              newList.map(value => {
                if (isEmail(value.trim()) || isEmailWithName(value.trim())) {
                  list.push(value);
                } else {
                  notList.push(value);
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
