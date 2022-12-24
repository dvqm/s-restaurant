import ContentCreator from './ContentCreator';
import UiCreator from './UiCreator';

const content = new ContentCreator();

const ui = new UiCreator();

ui.render(document.body, content.notFinished());

const btn = document.querySelector('#notFinished');

const backdrop = document.querySelector('#backdrop');

const cancel = () => {
  window.location.assign('/');
};

btn.addEventListener('click', cancel);

backdrop.addEventListener('click', cancel);
