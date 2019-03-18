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
