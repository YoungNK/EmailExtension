import * as React from "react";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="divcss5">
        <table width="950px" border="0" cellspacing="1" cellpadding="0">
          <tr>
            <th colspan="3">
              <div>
                <div class="title">证券及营销平台研发部</div>
                <div class="sub-title">
                  工作情况汇报（2019年01月21日-01月25日)
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <td colspan="3">
              <div class="info bd">
                <span>报告人：邵朝阳</span>
                <span>直接领导： 张鑫</span>
                <span>所属部门： 营销平台研发部 </span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="name bg-y info">工作项目</td>
            <td class="content bg-y info bd">本周结果</td>
            <td class="content bg-y info bd">下周计划</td>
          </tr>
          <tr>
            <td class="name info blue">工作项目</td>
            <td class="content info">
              <p>本周结果</p>
              <p>本周结果</p>
              <p>本周结果</p>
              <p>本周结果</p>
              <p>本周结果</p>
            </td>
            <td class="content info">下周计划</td>
          </tr>
          <tr>
            <td colspan="3" class="bg-y info bd" style={{textAlign:"center"}}>
              没有最好、只有更好！
            </td>
          </tr>
          <tr>
            <td class="name info">需要协同的事项</td>
            <td colspan="2" class="info" />
          </tr>
          <tr>
            <td class="name info">工作经验分享</td>
            <td colspan="2" class="info" />
          </tr>
          <tr>
            <td class="name info">待解决、求助</td>
            <td colspan="2" class="info" />
          </tr>
          <tr>
            <td class="name info">建议</td>
            <td colspan="2" class="info" />
          </tr>
        </table>
      </div>
    );
  }
}
