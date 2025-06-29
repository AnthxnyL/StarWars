const byline = document.getElementById('byline');
const bylineText = byline.textContent;
const fragment = document.createDocumentFragment();

for (const char of bylineText) {
  if (char === ' ') {
    fragment.appendChild(document.createTextNode(char));
  } else {
    const span = document.createElement('span');
    span.textContent = char;
    fragment.appendChild(span);
  }
}

byline.textContent = ''; 
byline.appendChild(fragment);


const crawl = document.querySelector('.crawl');
const containerText = document.querySelector('.container-text');
const planets = document.querySelector('.planets');

crawl.addEventListener('animationend', function() {
containerText.classList.remove('visible');
planets.classList.add('visible');
});


