import React from 'react';
import EventApp from './components/EventApp/EventApp';
import UpComingEvent from './components/UpComingEvents/UpComingEvents';
import './App.css';

import Header from './components/Header/Header';

const PAGESINFO = {
  EventManager: 'EventManager',
  UpComingEvent: 'UpComingEvent',
};

const App=()=> {
  let [currentPage, setCurrentPage] = React.useState(PAGESINFO.EventManager);
  let [pagesInfo, setPagesInfo] = React.useState(PAGESINFO);

  const hanldePageChange = (newPageInfo) => {
    setCurrentPage(newPageInfo);
  };

  let curPage = null;
  switch (currentPage) {
    case PAGESINFO.EventManager:
      curPage = <EventApp></EventApp>;
      break;
    case PAGESINFO.UpComingEvent:
      curPage = <UpComingEvent></UpComingEvent>;
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
