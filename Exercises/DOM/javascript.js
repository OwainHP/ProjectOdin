const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = `Hey I'm red!`;
para.style.color = 'red';
container.appendChild(para);

const heading = document.createElement('h3');
heading.classList.add('heading');
heading.textContent = `I'm a blue h3!`;
heading.style.color = 'blue';
container.appendChild(heading);

const withChild = document.createElement('div');
withChild.classList.add('withChild');
withChild.style.cssText = `background-color:pink; border-style: solid; border-color:black;`;
container.appendChild(withChild);

const headingChild = document.createElement('h1');
headingChild.classList.add('headingChild');
headingChild.textContent = `I'm in a div`;
withChild.appendChild(headingChild);

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent = `ME TOO!`;
withChild.appendChild(para1);

// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});