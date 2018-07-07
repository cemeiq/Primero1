





  var lineDrawing = anime({
  targets: '#lineDrawing .lines path',

  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 40,
  delay: function(el, i) { return i * 50 },
  direction: 'alternate',
  loop: false

});

var newURL = "index1.html";
window.setTimeout(document.location.href = newURL,0.00000000000000000000000000000000000000000000000000000000000000000000000000025);

//clearTimeout(myVar);
