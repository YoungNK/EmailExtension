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
    let { index, data = {} } = this.props;
    return (
      <div className="d-flex flex-column item-box">
        <a onClick={this.delete}>删除该项目</a>
        <Input
          addonBefore="项目名称"
          placeholder="项目名称"
          onChange={this.titleChange}
          value={data.title}
        />
        <div>本周结果</div>
        <TextArea
          placeholder="每行一个条目，行首无空格展示为首级行，加空格为次级行"
          autosize
          value={data.res}
          onChange={this.resChange}
        />
        <div>下周计划</div>
        <TextArea
          placeholder="每行一个条目，行首无空格展示为首级行，加空格为次级行"
          autosize
          value={data.plan}
          onChange={this.planChange}
        />
      </div>
    );
  }
}
