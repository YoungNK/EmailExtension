import * as React from "react";
import { Input } from "antd";

const { TextArea } = Input;

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    let { index } = this.props;
    this.props.dataChange(index, { delete: true });
  };

  resChange = val => {
    let { index, data = {} } = this.props;
    this.props.dataChange(index, {
      delete: false,
      ...data,
      res: val.target.value
    });
  };
  planChange = val => {
    let { index, data = {} } = this.props;
    this.props.dataChange(index, {
      delete: false,
      ...data,
      plan: val.target.value
    });
  };
  titleChange = val => {
    let { index, data = {} } = this.props;
    this.props.dataChange(index, {
      delete: false,
      ...data,
      title: val.target.value
    });
  };

  render() {
    let { data = {}, placeholder } = this.props;
    return (
      <div className="d-flex flex-column item-box">
        <Input
          addonBefore="项目名称"
          placeholder="项目名称"
          onChange={this.titleChange}
          value={data.title}
        />
        <div className="item-label">本周结果</div>
        <TextArea
          placeholder={placeholder}
          autosize
          value={data.res}
          onChange={this.resChange}
        />
        <div className="item-label">下周计划</div>
        <TextArea
          placeholder={placeholder}
          autosize
          value={data.plan}
          onChange={this.planChange}
        />
        <div className="item-delete">
          <a onClick={this.delete}>删除该项目</a>
        </div>
      </div>
    );
  }
}
