import SortView from '../view/sort-view.js';
import FilterView from '../view/filter-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import EditFormView from '../view/edit-form-view.js';
import NewEventFormView from '../view/new-event-form-view.js';
import { render } from '../render.js';

const POINT_COUNT = 3;

export default class BoardPresenter {
  constructor({ boardContainer, filterContainer }) {
    this.boardContainer = boardContainer;
    this.filterContainer = filterContainer;
    this.pointListComponent = new PointListView();
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.boardContainer);
    render(this.pointListComponent, this.boardContainer);
    render(new EditFormView(), this.pointListComponent.getElement());
    render(new NewEventFormView(), this.pointListComponent.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }
}
