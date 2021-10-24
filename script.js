ScrollReveal().reveal('.show', { enter: 'right',
    wait: '1s',
    move: '20px' });

ScrollReveal().reveal('.show1', { enter: 'right',
    wait: '0.8s',
    move: '20px' });

/*var config = {
//    enter: 'right',
    wait: '0.5s',
    move: '20px'
}

new scrollReveal(config);*/


// Progress bar 
let processScroll = () => {
  let docElem = document.documentElement, 
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
    scrollPercent = scrollTop / scrollBottom * 100 + '%';
  
  // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
  
    document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent); 
}

document.addEventListener('scroll', processScroll);