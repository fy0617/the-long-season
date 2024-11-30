const buttons = document.querySelectorAll('.inform');
let f=0;
let index = 0;
const showButtons = () => {
  if (index < buttons.length) {
    buttons[index].style.opacity = 1;
    index++;
    setTimeout(showButtons, 500);
  }
};
showButtons();


const button1 = document.getElementById('button1');
const section1 = document.getElementById('section1');
const button2 = document.getElementById('button2');
const section2 = document.getElementById('section2');
const button3 = document.getElementById('button3');
const section3 = document.getElementById('section3');
const button4 = document.getElementById('button4');
const section4 = document.getElementById('section4');
const button5 = document.getElementById('button5');
const section5 = document.getElementById('section5');
const button6 = document.getElementById('button6');
const section6 = document.getElementById('section6');

button1.addEventListener('mouseenter', () => {
  section1.style.left = '0%';
});

button1.addEventListener('mouseleave', () => {
  section1.style.left = '-300%';
});

section1.addEventListener('mouseenter', () => {
  section1.style.left = '0%';
});

section1.addEventListener('mouseleave', () => {
  section1.style.left = '-300%';
});

button2.addEventListener('mouseenter', () => {
  section2.style.left = '0%';
});

button2.addEventListener('mouseleave', () => {
  section2.style.left = '-300%';
});

section2.addEventListener('mouseenter', () => {
  section2.style.left = '0%';
});

section2.addEventListener('mouseleave', () => {
  section2.style.left = '-300%';
});

button3.addEventListener('mouseenter', () => {
  section3.style.left = '0%';
});

button3.addEventListener('mouseleave', () => {
  section3.style.left = '-300%';
});

section3.addEventListener('mouseenter', () => {
  section3.style.left = '0%';
});

section3.addEventListener('mouseleave', () => {
  section3.style.left = '-300%';
});

button4.addEventListener('mouseenter', () => {
  section4.style.left = '84%';
});

button4.addEventListener('mouseleave', () => {
  section4.style.left = '130%';
});

section4.addEventListener('mouseenter', () => {
  section4.style.left = '84%';
});

section4.addEventListener('mouseleave', () => {
  section4.style.left = '130%';
});

button5.addEventListener('mouseenter', () => {
  section5.style.left = '89%';
});

button5.addEventListener('mouseleave', () => {
  section5.style.left = '130%';
});

section5.addEventListener('mouseenter', () => {
  section5.style.left = '89%';
});

section6.addEventListener('mouseleave', () => {
  section6.style.left = '130%';
});

button6.addEventListener('mouseenter', () => {
  section6.style.left = '84%';
});

button6.addEventListener('mouseleave', () => {
  section6.style.left = '130%';
});

section6.addEventListener('mouseenter', () => {
  section6.style.left = '84%';
});

section6.addEventListener('mouseleave', () => {
  section6.style.left = '130%';
});

const button_to_hidden1 = [button2, button3, button4, button5, button6];

const backButton1 = document.getElementById('backbutton1');
const articleContainer1 = document.getElementById('article1');

button1.addEventListener('click', () => {
    button_to_hidden1.forEach((button) => {
      button.style.display = 'none';
    });
  articleContainer1.style.display = 'block';
});

backbutton1.addEventListener('click', () => {
  button_to_hidden1.forEach((button) => {
    button.style.display = 'block';
  });
  articleContainer1.style.display = 'none';
});

const button_to_hidden2 = [button1, button3, button4, button5, button6];
const backbutton2 = document.getElementById('backbutton2');
const articleContainer2 = document.getElementById('article2');

button2.addEventListener('click', () => {
    button_to_hidden2.forEach((button) => {
      button.style.display = 'none';
    });
  articleContainer2.style.display = 'block';
});

backbutton2.addEventListener('click', () => {
  button_to_hidden2.forEach((button) => {
    button.style.display = 'block';
  });
  articleContainer2.style.display = 'none';
});

const button_to_hidden4 = [button1, button2, button3, button5, button6];
const backbutton4 = document.getElementById('backbutton4');
const articleContainer4 = document.getElementById('article4');

button4.addEventListener('click', () => {
    button_to_hidden4.forEach((button) => {
      button.style.display = 'none';
    });
  articleContainer4.style.display = 'block';
});

backbutton4.addEventListener('click', () => {
  button_to_hidden4.forEach((button) => {
    button.style.display = 'block';
  });
  articleContainer4.style.display = 'none';
});

const button_to_hidden5 = [button1, button2, button3, button4, button6];
const backbutton5 = document.getElementById('backbutton5');
const articleContainer5 = document.getElementById('article5');

button5.addEventListener('click', () => {
    button_to_hidden5.forEach((button) => {
      button.style.display = 'none';
    });
  articleContainer5.style.display = 'block';
});

backbutton5.addEventListener('click', () => {
  button_to_hidden5.forEach((button) => {
    button.style.display = 'block';
  });
  articleContainer5.style.display = 'none';
});

const button_to_hidden6 = [button1, button2, button3, button4, button5];
const backbutton6 = document.getElementById('backbutton6');
const articleContainer6 = document.getElementById('article6');

button6.addEventListener('click', () => {
    button_to_hidden6.forEach((button) => {
      button.style.display = 'none';
    });
  articleContainer6.style.display = 'block';
});

backbutton6.addEventListener('click', () => {
  button_to_hidden6.forEach((button) => {
    button.style.display = 'block';
  });
  articleContainer6.style.display = 'none';
});



