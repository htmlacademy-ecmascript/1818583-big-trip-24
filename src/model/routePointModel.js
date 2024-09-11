import { getRandomPoint } from '../mock/routePoints';
import {ROUTE_POINT_COUNT} from '../constants';

export default class RoutePointsModel {
  points = Array.from({length: ROUTE_POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
