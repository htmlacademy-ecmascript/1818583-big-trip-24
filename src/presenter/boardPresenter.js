import {render} from '../render.js';
import SortView from '../view/sortView.js';
import PointsListView from '../view/pointsListView.js';
import PointView from '../view/pointView.js';
import EditPointView from '../view/editPointView.js';
// import NewPointView from '../view/newPointView.js';
import {POINTS_COUNT} from '../model/constants';

export default class BoardPresenter {
  pointsListComponent = new PointsListView();
  mainContainer = null;

  constructor({boardContainer: mainContainer}) {
    this.mainContainer = mainContainer;
  }

  init() {
    render(new SortView(), this.mainContainer);
    render(this.pointsListComponent, this.mainContainer);
    render(new EditPointView(), this.pointsListComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  }
}
