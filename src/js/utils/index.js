import moment from 'moment';


export const timeFormate = function (s, formart = 'mm:ss') {
    if (typeof s === 'string') {
        s = parseInt(s, 10)
    }
    var hour = Math.floor(s / 3600);
    var min = Math.floor(s / 60) % 60;
    var sec = Math.round(s) % 60;
    if (hour > 0 && formart === 'mm:ss') {
        formart = 'HH:mm:ss'
    }
    return moment({hours: hour, minutes: min, seconds: sec}).format(formart)
}

export const isPhone = (s) => {
    return s && /^1[345789]\d{9}$/.test(s);
}

export const isEmail = (str) => {
    return str && /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}