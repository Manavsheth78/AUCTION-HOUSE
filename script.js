const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-items');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    // if(sidebar.className === 'sidebar')
    //     sidebar.classList.add('open');
    // else
    //     sidebar.classList.remove('open');

// second approach using toggle !
    sidebar.classList.toggle('open');
    

});

function disableselect(e) {
    return false
  }
  
  function reEnable() {
    return true
  }
  
  document.onselectstart = new Function ("return false")
  
  if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
  }

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
            
        navItem.classList.add('active');

    });

});


// navItems.forEach(navItem => {
    
//     navItem.addEventListener('click', () => {
        
//       navItem.classList.contains('active') ? navItem.classList.remove('active') : navItem.classList.add('active');
      
//     });
//   });