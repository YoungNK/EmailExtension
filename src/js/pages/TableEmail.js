import * as React from "react";
export default class TableEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  getLineTitle = (title, isfirst) => {
    return `<p class="MsoNormal" style="${
      isfirst ? "margin-top:12.0pt;" : ""
    }margin-right:21.0pt;margin-bottom:
    0cm;margin-left:10.5pt;margin-bottom:.0001pt;mso-para-margin-top:1.0gd;
    mso-para-margin-right:2.0gd;mso-para-margin-bottom:0cm;mso-para-margin-left:
    1.0gd;mso-para-margin-bottom:.0001pt"><span style="font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
    color:#376092;mso-themecolor:accent1;mso-themeshade:191;mso-style-textfill-fill-color:
    #376092;mso-style-textfill-fill-themecolor:accent1;mso-style-textfill-fill-alpha:
  100.0%;mso-style-textfill-fill-colortransforms:lumm=75000">${title}<span lang="EN-US"><o:p></o:p></span></span></p>`;
  };

  getSubLine = (subline, isLast) => {
    return `<p class="MsoNormal" style="margin-top:0cm;margin-right:21.0pt;${
      isLast ? "margin-bottom:8.4pt;" : "margin-bottom:.0001pt;"
    }margin-left:32.5pt;mso-para-margin-top:0cm;
    mso-para-margin-right:2.0gd;mso-para-margin-bottom:0cm;mso-para-margin-left:
    32.5pt;mso-para-margin-bottom:.0001pt"><span style="font-size:10.0pt;
    font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;color:#595959;mso-themecolor:text1;
    mso-themetint:166;mso-style-textfill-fill-color:#595959;mso-style-textfill-fill-themecolor:
    text1;mso-style-textfill-fill-alpha:100.0%;mso-style-textfill-fill-colortransforms:
  &quot;lumm=65000 lumo=35000&quot;">${subline}<span lang="EN-US"><o:p></o:p></span></span></p>`;
  };

  renderLines = lines => {
    let res = "";
    lines.map((line, index) => {
      if (line.indexOf(" ") == 0) {
        res += this.getSubLine(line, index === (lines.length-1));
      } else {
        res += this.getLineTitle(line, index === 0);
      }
    });
    return res;
  };

  renderItemRow = programs => {
    return programs.map((value={}) => {
      return `<tr style="mso-yfti-irow:3;height:2.0cm">
      <td width="198" style="width:148.45pt;border-top:none;border-left:solid gray 1.0pt;
      mso-border-left-themecolor:background1;mso-border-left-themeshade:128;
      border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
      mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
      mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
      mso-border-top-themeshade:128;padding:.75pt .75pt 0cm .75pt;height:2.0cm">
      <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span style="font-size:14.0pt;mso-bidi-font-size:
      11.0pt;font-family:幼圆;mso-hansi-font-family:微软雅黑;color:#376092;mso-themecolor:
      accent1;mso-themeshade:191;mso-style-textfill-fill-color:#376092;mso-style-textfill-fill-themecolor:
      accent1;mso-style-textfill-fill-alpha:100.0%;mso-style-textfill-fill-colortransforms:
      lumm=75000">${
        value.title
      }</span></b><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:11.0pt;font-family:幼圆;mso-hansi-font-family:微软雅黑;
      color:#1F497D"><o:p></o:p></span></b></p>
      </td>
      <td width="387" style="width:290.6pt;border-top:none;border-left:none;
      border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
      mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
      mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
      mso-border-top-themeshade:128;mso-border-left-alt:solid windowtext 1.0pt;
      padding:.75pt .75pt 0cm .75pt;height:2.0cm">
      ${this.renderLines(value.res.split("\n"))}
      </td>
      <td width="331" style="width:248.05pt;border-top:none;border-left:none;
      border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
      mso-border-bottom-themeshade:128;border-right:solid gray 1.0pt;mso-border-right-themecolor:
      background1;mso-border-right-themeshade:128;mso-border-top-alt:solid gray 1.0pt;
      mso-border-top-themecolor:background1;mso-border-top-themeshade:128;
      mso-border-left-alt:solid windowtext 1.0pt;padding:.75pt .75pt 0cm .75pt;
      height:2.0cm">
      ${this.renderLines(value.plan.split("\n"))}
      </td>
     </tr>`;
    });
  };
  render() {
    let {
      name,
      leader,
      department,
      isSameYear,
      monYear,
      monMonth,
      monDay,
      friYear,
      friMonth,
      friDay,
      programs = [],
      needSyncMatter = "",
      underSolving = "",
      suggestions = ""
    } = this.props;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
      <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="916" style="width:687.1pt;border-collapse:collapse;border:none;mso-border-alt:solid gray 1.0pt;
      mso-border-themecolor:background1;mso-border-themeshade:128;mso-yfti-tbllook:
      1184;mso-padding-alt:0cm 0cm 0cm 0cm;mso-border-insideh:1.0pt solid gray;
      mso-border-insideh-themecolor:background1;mso-border-insideh-themeshade:128;
      mso-border-insidev:1.0pt solid windowtext">
      <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes;height:30.75pt">
       <td width="916" colspan="3" style="text-align:center;width:687.1pt;border:solid gray 1.0pt;
       mso-border-themecolor:background1;mso-border-themeshade:128;background:#FFFF99;
       padding:.75pt .75pt 0cm .75pt;height:30.75pt">
       <p class="MsoNormal" align="center" style="margin-top:6.0pt;mso-para-margin-top:
       .5gd;text-align:center"><b style="mso-bidi-font-weight:normal"><span style="font-size:18.0pt;mso-bidi-font-size:15.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">${department}<span lang="EN-US"><o:p></o:p></span></span></b></p>
       <p class="MsoNormal" align="center" style="margin-bottom:8.4pt;mso-para-margin-bottom:
       .7gd;text-align:center"><b style="mso-bidi-font-weight:normal"><span style="font-size:16.0pt;mso-bidi-font-size:15.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">工作周报（<span lang="EN-US">${monYear}</span>年<span lang="EN-US">${monMonth}</span>月<span lang="EN-US">${monDay}</span>日<span lang="EN-US"> ~${
            isSameYear ? "" : '<span lang="EN-US">' + friYear + "</span>年"
          } ${friMonth}</span>月<span lang="EN-US">${friDay}</span>日）</span></b><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:12.0pt;
       font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;mso-bidi-font-family:宋体"><o:p></o:p></span></b></p>
       </td>
      </tr>
      <tr style="mso-yfti-irow:1;height:30.75pt">
       <td width="916" colspan="3" style="width:687.1pt;border:solid gray 1.0pt;
       mso-border-themecolor:background1;mso-border-themeshade:128;border-top:none;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;padding:.75pt .75pt 0cm .75pt;height:30.75pt">
       <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:12.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">报告人：${name}<span lang="EN-US"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </span></span>直接负责人：${leader}<span lang="EN-US"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </span></span>所属部门：${department}</span></b><span lang="EN-US" style="font-size:12.0pt;
       font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;mso-bidi-font-family:宋体"><o:p></o:p></span></p>
       </td>
      </tr>
      <tr style="mso-yfti-irow:2;height:30.75pt">
       <td width="198" style="width:148.45pt;border-top:none;border-left:solid gray 1.0pt;
       mso-border-left-themecolor:background1;mso-border-left-themeshade:128;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;background:#FFFF99;padding:.75pt .75pt 0cm .75pt;
       height:30.75pt">
       <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:12.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">工作项目<span lang="EN-US"><o:p></o:p></span></span></b></p>
       </td>
       <td width="387" style="width:290.6pt;border-top:none;border-left:none;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;mso-border-left-alt:solid windowtext 1.0pt;
       background:#FFFF99;padding:.75pt .75pt 0cm .75pt;height:30.75pt">
       <p class="MsoNormal" align="left" style="text-align:left;text-indent:12.0pt;
       mso-char-indent-count:1.0"><b><span style="font-size:12.0pt;mso-bidi-font-size:
       11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;color:#404040;mso-themecolor:text1;
       mso-themetint:191;mso-style-textfill-fill-color:#404040;mso-style-textfill-fill-themecolor:
       text1;mso-style-textfill-fill-alpha:100.0%;mso-style-textfill-fill-colortransforms:
       &quot;lumm=75000 lumo=25000&quot;">本周结果<span lang="EN-US"><o:p></o:p></span></span></b></p>
       </td>
       <td width="331" style="width:248.05pt;border-top:none;border-left:none;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid gray 1.0pt;mso-border-right-themecolor:
       background1;mso-border-right-themeshade:128;mso-border-top-alt:solid gray 1.0pt;
       mso-border-top-themecolor:background1;mso-border-top-themeshade:128;
       mso-border-left-alt:solid windowtext 1.0pt;background:#FFFF99;padding:.75pt .75pt 0cm .75pt;
       height:30.75pt">
       <p class="MsoNormal" align="left" style="text-align:left;text-indent:12.0pt;
       mso-char-indent-count:1.0"><b><span style="font-size:12.0pt;mso-bidi-font-size:
       11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;color:#404040;mso-themecolor:text1;
       mso-themetint:191;mso-style-textfill-fill-color:#404040;mso-style-textfill-fill-themecolor:
       text1;mso-style-textfill-fill-alpha:100.0%;mso-style-textfill-fill-colortransforms:
       &quot;lumm=75000 lumo=25000&quot;">下周计划<span lang="EN-US"><o:p></o:p></span></span></b></p>
       </td>
      </tr>
      ${this.renderItemRow(programs)}
      <tr style="mso-yfti-irow:4;height:30.75pt">
      <td width="916" colspan="3" style="width:687.1pt;border:solid gray 1.0pt;
      mso-border-themecolor:background1;mso-border-themeshade:128;border-top:none;
      mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
      mso-border-top-themeshade:128;background:#FFFF99;padding:.75pt .75pt 0cm .75pt;
      height:30.75pt">
      <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:12.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
      color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
      #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
      100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">没有最好、只有更好！<span lang="EN-US"><o:p></o:p></span></span></b></p>
      </td>
      </tr>
      <tr style="mso-yfti-irow:5;height:22.55pt">
       <td width="198" style="width:148.45pt;border-top:none;border-left:solid gray 1.0pt;
       mso-border-left-themecolor:background1;mso-border-left-themeshade:128;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;padding:.75pt .75pt 0cm .75pt;height:22.55pt">
       <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:12.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">需要协同的事项<span lang="EN-US"><o:p></o:p></span></span></b></p>
       </td>
       <td width="718" colspan="2" valign="top" style="width:19.0cm;border-top:none;
       border-left:none;border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:
       background1;mso-border-bottom-themeshade:128;border-right:solid gray 1.0pt;
       mso-border-right-themecolor:background1;mso-border-right-themeshade:128;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;mso-border-left-alt:solid windowtext 1.0pt;
       padding:.75pt .75pt 0cm .75pt;height:22.55pt">
       ${this.renderLines(needSyncMatter.split('\n'))}
       </td>
      </tr>
      <tr style="mso-yfti-irow:6;height:22.55pt">
       <td width="198" style="width:148.45pt;border-top:none;border-left:solid gray 1.0pt;
       mso-border-left-themecolor:background1;mso-border-left-themeshade:128;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;padding:.75pt .75pt 0cm .75pt;height:22.55pt">
       <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:12.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">待解决，求助<span lang="EN-US"><o:p></o:p></span></span></b></p>
       </td>
       <td width="718" colspan="2" style="width:19.0cm;border-top:none;border-left:none;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid gray 1.0pt;mso-border-right-themecolor:
       background1;mso-border-right-themeshade:128;mso-border-top-alt:solid gray 1.0pt;
       mso-border-top-themecolor:background1;mso-border-top-themeshade:128;
       mso-border-left-alt:solid windowtext 1.0pt;padding:.75pt .75pt 0cm .75pt;
       height:22.55pt">
       ${this.renderLines(underSolving.split('\n'))}
       </td>
      </tr>
      <tr style="mso-yfti-irow:7;mso-yfti-lastrow:yes;height:21.8pt">
       <td width="198" style="width:148.45pt;border-top:none;border-left:solid gray 1.0pt;
       mso-border-left-themecolor:background1;mso-border-left-themeshade:128;
       border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:background1;
       mso-border-bottom-themeshade:128;border-right:solid windowtext 1.0pt;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;padding:.75pt .75pt 0cm .75pt;height:21.8pt">
       <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:12.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;;
       color:#404040;mso-themecolor:text1;mso-themetint:191;mso-style-textfill-fill-color:
       #404040;mso-style-textfill-fill-themecolor:text1;mso-style-textfill-fill-alpha:
       100.0%;mso-style-textfill-fill-colortransforms:&quot;lumm=75000 lumo=25000&quot;">建议<span lang="EN-US"><o:p></o:p></span></span></b></p>
       </td>
       <td width="718" colspan="2" valign="top" style="width:19.0cm;border-top:none;
       border-left:none;border-bottom:solid gray 1.0pt;mso-border-bottom-themecolor:
       background1;mso-border-bottom-themeshade:128;border-right:solid gray 1.0pt;
       mso-border-right-themecolor:background1;mso-border-right-themeshade:128;
       mso-border-top-alt:solid gray 1.0pt;mso-border-top-themecolor:background1;
       mso-border-top-themeshade:128;mso-border-left-alt:solid windowtext 1.0pt;
       padding:.75pt .75pt 0cm .75pt;height:21.8pt">
       ${this.renderLines(suggestions.split('\n'))}
       </td>
      </tr>
     </tbody></table>
      `
        }}
      />
    );
  }
}
