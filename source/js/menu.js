      var pageHeader = document.querySelector('.page-header__control-panel');
      var Burger = document.querySelector('.page-header__burger');
      var Menu = document.querySelector('.menu');

      Burger.classList.remove('page-header__burger--hidden');
      pageHeader.classList.add('page-header__transparent');
      Menu.classList.add('menu__hidden');

      Burger.addEventListener('click', function () {
        if (pageHeader.classList.contains('page-header__transparent')) {
          pageHeader.classList.remove('page-header__transparent');
          Burger.classList.remove('page-header__burger');
          Burger.classList.add('page-header__burger--cross');
          Menu.classList.remove('menu__hidden');
        }
        else {
          Menu.classList.add('menu__hidden');
          Burger.classList.remove('page-header__burger--cross');
          Burger.classList.add('page-header__burger');
          pageHeader.classList.add('page-header__transparent');
        }
      });
