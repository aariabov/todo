import Model from './model';
import Template from './template';
import View from './view';
import Controller from './controller';

const template = new Template();
const view = new View(template);
const model = new Model();
const controller = new Controller(view, model);

const setView = () => controller.setView(document.location.hash);
window.addEventListener('load', setView);
window.addEventListener('hashchange', setView);