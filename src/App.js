import React from 'react';
import EventApp from './components/EventApp/EventApp';
import UpComingEventPage from './components/UpComingEvents/UpComingEvents';
import './App.css';
import Counter from './components/Counter/counter';
import EventCounter from './components/Counter/counterFn';
import Header from './components/Header/Header';

const PAGESINFO = {
  EventManager: 'EventManager',
  UpComingEvent: 'UpComingEvent',
  EventCounter: 'EventCounter',
  CounterFn: 'CounterFn',
};

const App=()=> {
  const [currentPage, setCurrentPage] = React.useState(PAGESINFO.EventManager);
  const [pagesInfo, setPagesInfo] = React.useState(PAGESINFO);

  const hanldePageChange = (newPageInfo) => {
    setCurrentPage(newPageInfo);
  };

  let curPage = null;
  switch (currentPage) {
    case PAGESINFO.EventManager:
      curPage = <EventApp></EventApp>;
      break;
    case PAGESINFO.UpComingEvent:
      curPage = <UpComingEventPage></UpComingEventPage>;
      break;
    case PAGESINFO.EventCounter:
      curPage = <Counter></Counter>;
      break;
    case PAGESINFO.CounterFn:
      curPage = <EventCounter></EventCounter>;
      break;
    default:
  }

  return (
    <div className="App">
      <Header
        pagesInfo={pagesInfo}
        hanldePageChange={hanldePageChange}
      ></Header>
      {curPage}
    </div>
  );
  }

export default App;
