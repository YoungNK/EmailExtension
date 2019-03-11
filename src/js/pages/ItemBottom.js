import * as React from "react";
import { Input } from "antd";

const { TextArea } = Input;

export default class ItemBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  resChange = e => {
    let { dataChange, name } = this.props;
    dataChange(e, name);
  };

  render() {
    let { data = '', placeholder, title } = this.props;
    return (
      <div className="d-flex flex-column item-box">
        <div className="item-label">{title}</div>
        <TextArea
          placeholder={placeholder}
          autosize
          value={data}
          onChange={this.resChange}
        />
      </div>
    );
  }
}
