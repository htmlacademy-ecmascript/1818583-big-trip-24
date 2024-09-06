import {render} from './render.js';
import FilterView from './view/filterView.js';
import BoardPresenter from './presenter/boardPresenter.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: mainContentElement});

render(new FilterView(), filtersElement);

boardPresenter.init();
