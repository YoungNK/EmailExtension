import * as React from "react";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  resChange = e => {
    let { dataChange, name } = this.props;
    dataChange(e, name);
  };

  render() {
    return (
      <div className="d-flex flex-column about-me">
        <div className="a-label">关于</div>
        <p>邮件客户端对于表格的排版和行列的增减让我每次都很捉急；</p>
        <p>
          本程序为简化大家周报格式问题编写，我觉得每次可以节约几分钟，并且可以得到更统一的排版；
        </p>
        <p>
          日期等信息通过代码，根据当前计算机时间自动计算，免去翻看日历的困扰；
        </p>
        <p>收件人、抄送和签名档等信息一次配置永久使用；</p>
        <p>所有数据编辑后即时存储，不用担心数据丢失；</p>
        <p>任何问题或者建议请联系：</p>
        <a href={"mailto:邵朝阳 <shaozhaoyang@jd.com>"}>
          E-mail:shaozhaoyang@jd.com
        </a>
        <p>
          <i>
            数据均存储在本地localStorage，没有任何网络传输，不用担心数据安全问题
          </i>
        </p>
        <p>
          <i>源代码因为包含周报模板，所以没有放github，需要的可以邮件索取</i>
        </p>
      </div>
    );
  }
}
