import * as React from "react";
import logo from "../../img/logo.png";

export default class Sign extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { email, name, Ename = "", phone, departmentFull = "" } = this.props;
    return (
      <div className="sign">
        <p>
          {name} {Ename}
        </p>
        <p>{departmentFull}</p>
        <img src={logo} className="logo" />
        <p>手机号：+(86) {phone}</p>
        <p>邮编：100101</p>
        <a href={`mailto:${name}<${email}>`}>E-mail：{email}</a>
        <p>地址: 北京市亦庄经济开发区经海五路58号院 数字工场10号楼</p>
        <p>
          Address: Building 10, Digital Factory, No.58 Jinghai 5th Road, Beijing
          Economic-Technological Development Area, Beijing, P.R China
        </p>
        <div className="divider">
          --------------------------------------------------------------------------------------------------------------------
        </div>
        <div className="tip">
          <p>
            重要提示：此邮件及附件具保密性质，包含商业秘密，受法律保护不得泄露，特此提醒您此邮件的机密性。如果您意外收到此邮件，请立即通知我，并从您的系统中删除此邮件及附件，禁止使用、复制或向他人披露邮件及附件相关内容。
          </p>
          <p>
            Confidentiality Note: This email is intended only for the person or
            entity to which it is addressed and may contain information that is
            privileged, confidential or otherwise protected from disclosure.
            Unauthorized use, dissemination, distribution or copying of this
            email or the information herein or taking any action in reliance on
            the contents of this email or the information herein, by anyone
            other than the intended recipient, or an employee or agent
            responsible for delivering the message to the intended recipient, is
            strictly prohibited. If you have received this email in error,
            please notify the sender immediately and destroy the original
            message, any attachments thereto and all copies.
          </p>
        </div>
      </div>
    );
  }
}
