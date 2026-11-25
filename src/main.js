import BoardPresenter from './presenter/board-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsElement,
  filterContainer: filterContainerElement,
});

boardPresenter.init();
