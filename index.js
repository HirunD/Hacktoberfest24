const el = document.getElementById("line3")

setTimeout(() => {
  el.style.display = 'block';
  el.innerHTML = '[Connecting To the Database]';
}, 6800);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database.]';
}, 7200);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database..]';
}, 7400);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database...]';
}, 7600);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database.]';
}, 7800);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database..]';
}, 8000);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database...]';
}, 8200);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database.]';
}, 8400);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database..]';
}, 8600);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database...]';
}, 8800);

setTimeout(() => {
    el.innerHTML = '[Database Connected]';
  }, 9000);


const el3 = document.getElementById("line-dash")

setTimeout(() => {
      el3.style.display = 'block';
    }, 11600);

const el2 = document.getElementById("line5")

setTimeout(() => {
  el2.style.display = 'block';
  el2.innerHTML = '[Loading Event Details]';
}, 11800);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details.]';
}, 12000);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details..]';
}, 12200);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details...]';
}, 12400);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details.]';
}, 12600);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details..]';
}, 12800);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details...]';
}, 13000);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details.]';
}, 13200);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details..]';
}, 13400);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details...]';
}, 13600);

setTimeout(() => {
    el2.innerHTML = '[Event Details]';
  }, 13800);


const el4 = document.getElementById("line-dash2")

setTimeout(() => {
        el4.style.display = 'block';
      }, 20800);

const el5 = document.getElementById("line11")

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download in 3s'
    }, 28400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download in 2s'
    }, 29400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download in 1s'
    }, 30400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download in 0s'
    }, 31400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt [Invitation Downloaded Successfully]'
    }, 32100);

// function downloadInvitation(){
//     const anchor = document.createElement('a');
//     anchor.href = 'Images/Mr.Pasindu Nayanaka Epa.jpg';
//     anchor.download = 'Hacktoberfest Invitation';

//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
// }

const btn = document.getElementById("btn")
setTimeout(() => {
    // btn.onclick = downloadInvitation()
}, 31500);

const el6 = document.getElementById("line13")
setTimeout(() => {
    el6.style.display = 'block'
}, 35000);

function myFunction2(x) {
    if (x.matches) { // If media query matches
        document.getElementById('line9').innerHTML='&gt&gt It is with honor that we invite you to "Hacktoberfest 22",'
    } else {
        document.getElementById('line9').innerHTML='&gt&gt It is with honor that we invite you to "Hacktoberfest 22", Organized by'
    }
  }
  
  var x = window.matchMedia("(max-width: 400px)")
  myFunction2(x) // Call listener function at run time
  x.addListener(myFunction2) // Attach listener function on state changes



  function myFunction(y) {
      if (y.matches) { // If media query matches
        document.getElementById('line10').innerHTML='&nbsp&nbsp Organized by the Richmond College It Society.'
      } else {
        document.getElementById('line10').innerHTML='&nbsp&nbsp the Richmond College It Society in parallel to the global event.'
      }
    }
    
    var y = window.matchMedia("(max-width: 400px)")
    myFunction(y) // Call listener function at run time
    y.addListener(myFunction) // Attach listener function on state changes