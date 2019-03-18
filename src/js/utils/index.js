import moment from "moment";

const DataKeyName = "email_extension_data_4_jder";
export const timeFormate = function(s, formart) {
  return moment(s).format(formart);
};

export const isPhone = s => {
  return s && /^1[345789]\d{9}$/.test(s);
};

export const isEmail = str => {
  return str && /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
};

export const findEmail = str => {
  let tmp = str && /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.exec(str);
  return tmp ? tmp[0] : "";
};

export const isEmailWithName = str => {
  return (
    str &&
    /^[\s\S]+<[ ]?\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*[ ]?>$/.test(str)
  );
};

export const storeData = param => {
  var dataNow;
  try {
    dataNow = JSON.parse(window.localStorage.getItem(DataKeyName));
  } catch (ex) {}
  dataNow = dataNow ? dataNow : {};
  dataNow = { ...dataNow, ...param };
  window.localStorage.setItem(DataKeyName, JSON.stringify(dataNow));
};

export const loadFromStorage = () => {
  var dataNow;
  try {
    dataNow = JSON.parse(window.localStorage.getItem(DataKeyName));
  } catch (ex) {}
  dataNow = dataNow ? dataNow : {};
  dataNow.programs = dataNow.programs || [
    {
      title: "示例标题",
      res:
        "1、示例项目1一级行\n a)示例2级行示例2级行\n 示例2级行示例2级\n2、示例项目1一级行\n 示例2级行示例2级行\n 示例2级行示例2级行",
      plan: ""
    }
  ];
  dataNow.departmentFull =
    dataNow.departmentFull || "企业服务群组-研发中心-传媒研发部-营销产品研发组";
  dataNow.leader = dataNow.leader || "张鑫";
  dataNow.department = dataNow.department || "传媒研发部";
  dataNow.receivers = dataNow.receivers || ["张鑫 <zhangxin10@jd.com>"];
  dataNow.cc = dataNow.cc || [
    "张庆锋 <zhangqingfeng11@jd.com>",
    "Rowen SUN孙歌 <sunge@jd.com>",
    "石强 <shiqiang@jd.com>",
    "张敏 <zhangmin5@jd.com>",
    "李雪 <lixue3@jd.com>",
    "郭江江 <guojiangjiang@jd.com>",
    "赵钦 <zhaoqin5@jd.com>",
    "吴燕峰 <wuyanfeng@jd.com>",
    "陈东伟 <chendongwei1@jd.com>",
    "赵庆礼 <zhaoqingli@jd.com>",
    "邵朝阳 <shaozhaoyang@jd.com>",
    "常志峰 <changzhifeng@jd.com>",
    "王月阳 <wangyueyang@jd.com>",
    "祝鹤源 <zhuheyuan@jd.com>",
    "刘须华 <liuxuhua@jd.com>",
    "张维维 <zhangweiwei6@jd.com>",
    "叶纪峰 <yejifeng@jd.com>",
    "陈丽萍 <chenliping5@jd.com>"
  ];
  return dataNow;
};

export const getOS = () => {
  var sUserAgent = navigator.userAgent;
  var isWin = navigator.platform == "Win32" || navigator.platform == "Windows";
  var isMac =
    navigator.platform == "Mac68K" ||
    navigator.platform == "MacPPC" ||
    navigator.platform == "Macintosh" ||
    navigator.platform == "MacIntel";
  if (isMac) return "Mac";
  var isUnix = navigator.platform == "X11" && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = String(navigator.platform).indexOf("Linux") > -1;
  if (isLinux) return "Linux";
  if (isWin) {
    var isWin2K =
      sUserAgent.indexOf("Windows NT 5.0") > -1 ||
      sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP =
      sUserAgent.indexOf("Windows NT 5.1") > -1 ||
      sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 =
      sUserAgent.indexOf("Windows NT 5.2") > -1 ||
      sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista =
      sUserAgent.indexOf("Windows NT 6.0") > -1 ||
      sUserAgent.indexOf("Windows Vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 =
      sUserAgent.indexOf("Windows NT 6.1") > -1 ||
      sUserAgent.indexOf("Windows 7") > -1;
    if (isWin7) return "Win7";
    var isWin10 =
      sUserAgent.indexOf("Windows NT 10") > -1 ||
      sUserAgent.indexOf("Windows 10") > -1;
    if (isWin10) return "Win10";
  }
  return "other";
};
