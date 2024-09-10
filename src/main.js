import {render} from './render.js';
import FilterListView from './view/filterListView.js';
import BoardPresenter from './presenter/boardPresenter.js';
import RoutePointsModel from './model/routePointModel.js';
import OffersModel from './model/offersModel.js';
import DestinationsModel from './model/destinationsModel.js';

const siteMainElement = document.querySelector('.page-body');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__filters');
const siteSortElement = siteMainElement.querySelector('.trip-events');
const routePointModel = new RoutePointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const boardPresenter = new BoardPresenter({boardContainer: siteSortElement, routePointModel, offersModel, destinationsModel});

render(new FilterListView(), siteHeaderElement);

boardPresenter.init();
