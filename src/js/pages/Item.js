import * as React from "react";
import { Input, Popconfirm } from 'antd';

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
  newSyncChange = val => {
    let { index, data = {} } = this.props;
    this.props.dataChange(index, {
      delete: false,
      ...data,
      newSync: val.target.value
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
        <div className="item-label">需要协同事项</div>
        <TextArea
          placeholder={placeholder}
          autosize
          value={data.newSync}
          onChange={this.newSyncChange}
        />
        <div className="item-delete">
          <Popconfirm title="确定删除当前项目？" okText="确定" cancelText="取消" onConfirm={this.delete}>
            <a >删除该项目</a>
          </Popconfirm>
        </div>
      </div>
    );
  }
}
