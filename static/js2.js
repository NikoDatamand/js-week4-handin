const outerDiv = document.querySelector('#outer');
const paragraph = document.querySelector('#output');

outerDiv.addEventListener('click', function(e) {
  const id = e.target.id;
  paragraph.innerText = `Hello from ${id}`;
});