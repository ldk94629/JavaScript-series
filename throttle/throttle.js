/**
 * 节流函数
 * fn:throttle
 * @params{function} callback 回调函数;
 * @params{Number} wait 间隔时间
 * 
 * return {Function} 节流函数
 */
function throttle(callback,wait=1000){
    let timer=null;
    let startTime;
    return function(){
        const ctx=this;
        const args=arguments;
        const now = +new Date();
        if(startTime&&now<startTime+wait){
            clearInterval(timer);
            timer=setTimeout(function(){
                startTime=now;
                callback.apply(ctx,args)
            },wait)
        }else{
            startTime=now;
            callback.apply(ctx,args)
        }
    }

}
const body = document.querySelector('body');
const btn = document.createElement('div');
btn.style = 'cursor: pointer; padding: 10px; background:red; border-radius: 5px; text-align: center; color:#fff;';
btn.innerHTML = '函数节流默认 3 秒';
body.append(btn);
btn.args
function callback() {
    console.log('pr');
}
btn.addEventListener('click', throttle(callback));
/**
 * 来源：掘金
 * 作者：编程之上
 * 链接：https://juejin.cn/post/6844903952685727758
 */
btn.onclick=throttle(callback);


