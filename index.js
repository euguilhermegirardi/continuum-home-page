/* MOBILE NAV BAR */
const toggleMenu = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/* MOBILE NAV BAR ENDS */

/* NAV */
const getEventTarget = e => {
  e = e || window.event;
  return e.target || e.srcElement;
};

const navBar = document.querySelector('.navbar');
const dropDown = document.querySelectorAll('.dropdown');
const dropMenu = document.querySelectorAll('.dropdown-content');

const noState = () => {
  dropMenu.forEach(el => {
    el.setAttribute('data-state', 'closed');
    el.style.display = "none";
  });
}

const dropDownMenu = (e) => {
  let menuTab = getEventTarget(e);
  if (menuTab.className.includes('dropbtn')) {
    let menuContent = menuTab.nextElementSibling;
    if (menuContent) {
      menuContent.setAttribute('data-state', menuContent.getAttribute('data-state') === 'open' ?
        'closed' : 'open'
      );
      menuContent.style.display = {
        'open': 'block',
        'closed': 'none'
      }[menuContent.getAttribute('data-state')];
    }
  }
}

const initializeNav = () => {
  navBar.addEventListener('click', dropDownMenu);

  dropDown.forEach(el => {
    el.addEventListener('mouseleave', noState);
  });

  dropMenu.forEach(el => {
    el.addEventListener('click', noState);
  });

  noState();
}
/* NAV ENDS */

/* BANNER */
const initializeBanner = () => {
  var prev = document.querySelector('div.prev');
  var next = document.querySelector('div.next');
  var index = 0;
  var lis = document.querySelectorAll('ul.slider li');
  var count = lis.length;

  prev.addEventListener('click', function () {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0) {
      index = count - 1;
    }

    lis[index].classList.add('visible');
  });

  next.addEventListener('click', function () {
    lis[index].classList.remove('visible');
    index++;
    if (index > count - 1) {
      index = 0;
    }

    lis[index].classList.add('visible');
  });
}
/* BANNER ENDS */

/* ACCORDION */
const toggleTab = (tab) => {
  if (isTabOpen(tab))
    closeTab(tab);
  else
    openTab(tab);
}

const isTabOpen = (tab) => {
  return tab.getAttribute("data-state") === "open";
}

const closeTab = (tab) => {
  tab.setAttribute("data-state", "closed");
  var panel = tab.nextElementSibling;
  if (panel) {
    panel.style.maxHeight = null;
  }
  var icon = tab.firstElementChild;
  if (icon) {
    icon.innerHTML = 'V';
  }
}

const openTab = (tab) => {
  tab.setAttribute("data-state", "open");
  var panel = tab.nextElementSibling;
  if (panel) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
  var icon = tab.firstElementChild;
  if (icon) {
    icon.innerHTML = 'X';
  }
}

const closeOtherTabs = (tab) => {
  var tabs = document.getElementsByClassName("accordion");
  for (var i = 0; i < tabs.length; i++) {
    let otherTab = tabs[i];
    if (isTabOpen(otherTab) && otherTab !== tab)
      closeTab(otherTab);
  }
}

const initTabs = () => {
  var tabs = document.getElementsByClassName("accordion");
  for (var i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    closeTab(tab);
    tab.addEventListener("click", () => {
      closeOtherTabs(tab);
      toggleTab(tab);
    });
  }
}
/* ACCORDION ENDS */

const main = () => {
  initializeNav();
  initializeBanner();
  initTabs();
}

main();
