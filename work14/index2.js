let nowtime = new Date();
let m = s = 0
m = 59 - nowtime.getMinutes()
s = 59 - nowtime.getSeconds()

let id1 = setInterval(seckill,1000)
function seckill() {
    s--
    if(s == -1){
        s = 59;
        m -= 1;
    }
    else if(m == -1){
        m = 59;
    }
    document.getElementById('m').innerHTML = m +'分';
    document.getElementById('s').innerHTML = s +'秒';
}