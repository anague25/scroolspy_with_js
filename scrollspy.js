/**
 * @param {HTMLElement} elem
 */
const activate = function(elem){
    const id = elem.getAttribute('id');
    console.log(id);
    // const anchor = document.querySelector(`a[href="#${id}"]`);
}

/**
 * 
 * @param {IntersectionObserverEntry} entries 
 * @param {IntersectionObserver} observer 
 */

const callBack = function(entries,observer){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0){
            // activate(entry);
          console.log(entry)
        }
    })
}




const spies = document.querySelectorAll('[data-spy]');
if(spies.length > 0){
    const observer = new IntersectionObserver(callBack,{});
    spies.forEach((spy)=>{
        observer.observe(spy)
    })
}

const val = document.querySelector('.class1')
console.log(val)
console.log(val.getAttribute('id'))