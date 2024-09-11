import BoardPresenter from './presenter/boardPresenter.js';
import RoutePointsModel from './model/routePointModel.js';
import OffersModel from './model/offersModel.js';
import DestinationsModel from './model/destinationsModel.js';

const siteMainElement = document.querySelector('.page-body');
const siteSortElement = siteMainElement.querySelector('.trip-events');
const routePointModel = new RoutePointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const boardPresenter = new BoardPresenter({boardContainer: siteSortElement, routePointModel, offersModel, destinationsModel});

boardPresenter.init();
