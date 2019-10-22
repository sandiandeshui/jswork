// var num = parseInt(prompt("输入一个偶数"));
//     isTrue(num);
//     // 判断一个数是否是质数
//     function factorial(a){
//         var sum=0;
//         for(var i=1;i<=a;i++){
//             if(a % i ==0){
//                 sum++;
//             }
//         }
//         if(sum==2){
//             return true;
//         }else{
//             return false;
//         }
//     }
//   // 判断用户输入的偶数是否可分为两个质数之和：

//     function isTrue(a){
//       for(var i=2;i<a-2;i++){
//         var j = a -i;
//         if(factorial(i)&&factorial(j)){
//             console.log(a+"可以拆分为两个质数"+ i+"与"+j+"的和");
//         }
//       }
//     }
for (var i=8;i<10000;i+=2){//遍历8-10000的所有偶数，去判断每一个偶数是否满足哥德巴赫猜想
    if(isgdbh(i)){
        document.write(i +"满足哥德巴赫猜想"+"</br>");
    }else{
        document.write(i + "不满足哥德巴赫猜想"+"</br>");
    }
}
function isgdbh(num){
   var flag = false;
   for(var i=2;i<num;i++){
       if(isprime(i)&& isprime(num - i)){
           flag = true;
           break;
       }else{
           continue;
       }
   }
   return flag;
}
function isprime(num){
   var flag = true;
   for(var j=2;j<num;j++){
       if(num % j ==0){
           flag = false;
       }
   }
   return flag;
}
