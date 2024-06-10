const textElement = document.getElementById('animatedText');
const text = "Hi, i'm Aprizal";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}

type();
