import ContentCreator from './components/ContentCreator';
import UiCreator from './components/UiCreator';
import './styles/underConstruct.scss';

const content = new ContentCreator();

const ui = new UiCreator();

const queryString = new URL(window.location.href).search;

const urlParams = new URLSearchParams(queryString);

const errMsg = urlParams.get('errmsg');

if (errMsg === null) {
  ui.render(document.body, content.notFinished());
} else if (errMsg === 'emptyrest') {
  ui.render(
    document.body,
    content.notFinished('This restaurant doesn\'t have its menu'),
  );
}

const btn = document.querySelector('#notFinished');
const backdrop = document.querySelector('#backdrop');

const cancel = () => {
  window.location.href = sessionStorage.getItem('prevUrl');
};

btn.addEventListener('click', cancel);

backdrop.addEventListener('click', cancel);
