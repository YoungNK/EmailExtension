import moment from 'moment';


export const timeFormate = function (s, formart) {
    return moment(s).format(formart)
}

export const isPhone = (s) => {
    return s && /^1[345789]\d{9}$/.test(s);
}

export const isEmail = (str) => {
    return str && /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}