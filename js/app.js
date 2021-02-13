var elButtonToggler = document.querySelector('.sitenav__toggle');
    var elButton = document.querySelector('.sitenav');

    elButtonToggler.addEventListener('click', function () {
      elButton.classList.toggle('sitenav--open');
    });