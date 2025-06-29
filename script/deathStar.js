var slices = 8,
  angle = 360 / slices,
  sphere = document.querySelector('.sphere');
for (var i = 0; i < (slices - 1); i++) {
  var slice = document.createElement('div');
  slice.className = 'circle';
  slice.style.transform = 'rotateY(' + angle * i + 'deg)';
  sphere.appendChild(slice);
}


