var elButtonToggler = document.querySelector('.sitenav__toggle');
var elButton = document.querySelector('.sitenav');
var elMapDiv = document.querySelector('.contacts__map-wrapper');

elButtonToggler.addEventListener('click', function () {
  elButton.classList.toggle('sitenav--open');
});

elMapDiv.addEventListener("click", function() {
  var elMap = document.querySelector('.contacts__map');

  elMap.classList.add("contacts__map--clicked");
});
