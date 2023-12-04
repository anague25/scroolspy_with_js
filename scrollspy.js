/**
 * 
 * @param {IntersectionObserverEntry} entries 
 * @param {IntersectionObserver} observer 
 */

const callBack = function(entries,observer){
console.log(entries);
}


const spies = document.querySelectorAll('[data-spy]');
if(spies.length > 0){
    const observer = new IntersectionObserver(callBack,{});
    spies.forEach((spy)=>{
        observer.observe(spy)
    })
}