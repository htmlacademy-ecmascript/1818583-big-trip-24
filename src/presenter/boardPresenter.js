import {render} from '../render.js';
import BoardView from '../view/boardView.js';
import RoutePointView from '../view/routePointView.js';
import SortListView from '../view/sortView.js';
import NewFormView from '../view/createFormView.js';
import EditFormView from '../view/editFormView.js';

export default class BoardPresenter {
  boardComponent = new BoardView();

  constructor({boardContainer, routePointModel, offersModel, destinationsModel}) {
    this.boardContainer = boardContainer;
    this.routePointModel = routePointModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.boardPoints = [...this.routePointModel.getPoints()];
    render(this.boardComponent, this.boardContainer);
    render(new SortListView(), this.boardComponent.getElement());
    render(new NewFormView(), this.boardComponent.getElement());
    for (let i = 0; i < this.boardPoints.length; i++) {
      const offers = this.offersModel.getOffersByType(this.boardPoints[i].type);
      const destination = this.destinationsModel.getDestinationsById(this.boardPoints[i].destination);
      render(new RoutePointView({
        point: this.boardPoints[i], offers, destination}), this.boardComponent.getElement());
    }
    render(new EditFormView({
      point: this.boardPoints[0],
      destination: this.destinationsModel.getDestinationsById(this.boardPoints[0].destination),
      offers: this.offersModel.getOffersByType(this.boardPoints[0].type),
    }), this.boardComponent.getElement());
  }
}
