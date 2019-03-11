import moment from "moment";

const DataKeyName = "email_extension_data_4_jder";
export const timeFormate = function(s, formart) {
  return moment(s).format(formart);
};

export const isPhone = s => {
  return s && /^1[345789]\d{9}$/.test(s);
};

export const isEmail = str => {
  return str && /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
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
