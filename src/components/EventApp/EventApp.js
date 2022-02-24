import React from 'react';
import './EventApp.css';
import { withEventData } from '../../hoc/withEventData';

import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

const EventApp=(props)=> {
  let [dataCol]=React.useState(['Event Name', 'Start Date', 'End Date', 'Actions']);
  let [isShowAddEventRow, setIsShowAddEventRow] = React.useState(false);
  let [newEventRow, setNewEventRow] = React.useState(new EventData('', '' + Date.now(), '' + Date.now()));

  const hanldeAddEvent = () => {
    setIsShowAddEventRow(true);
  };
  const hanldeOnChange = (newEvent) => {
    setNewEventRow(newEvent);
  };

  const handleCloseAddNew = () => {
    setIsShowAddEventRow(false);
    setNewEventRow(new EventData('', '' + Date.now(), '' + Date.now()));
  };

  const hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = newEventRow;
    const newEvent = new EventData(eventName, startDate, endDate);
    newEvent.parseTimeStamp();
    if (newEvent.isValidForSave()) {
      hanldeAddEvent(newEvent).then((data) => {
        handleCloseAddNew();
      });
    } else {
      alert('inValid');
    }
  };

  const handleEditSave = (editEventObj) => {
    props.handleUpdateEvent(editEventObj).then((data) => {
      props.handleSetEdit(editEventObj, false);
    });
  };

  const renderHeader = () => <Button onClick={hanldeAddEvent}>Add Event</Button>;
  const renderFooter = () => {
    if (isShowAddEventRow) {
      return (
        <EventDataRow
          event={newEventRow}
          actions={[
            {
              actionName: 'Save',
              actionFn: hanldeSaveAddNew,
            },
            {
              actionName: 'Close',
              actionFn: handleCloseAddNew,
            },
          ]}
          handleOnchange={hanldeOnChange}
        ></EventDataRow>
      );
    } else {
      return null;
    }
  };

    const {
      events,
      handleOnChangeEditEvent,
      handleDeleteEvent,
      handleSetEdit,
    } = props;
    return (
      <EventTable
        dataCol={dataCol}
        renderFooter={renderFooter}
        renderHeader={renderHeader}
      >
        {events?.map((event) =>
          event.isEditing ? (
            <EventDataRow
              key={event.id}
              event={event.editEvent}
              actions={[
                {
                  actionName: 'Save',
                  actionFn: handleEditSave,
                },
                {
                  actionName: 'Cancel',
                  actionFn: () => handleSetEdit(event, false),
                },
              ]}
              handleOnchange={handleOnChangeEditEvent}
            ></EventDataRow>
          ) : (
            <EventDataRow
              key={event.id}
              event={event}
              actions={[
                {
                  actionName: 'Edit',
                  actionFn: () => handleSetEdit(event, true),
                },
                {
                  actionName: 'Delete',
                  actionFn: handleDeleteEvent,
                },
              ]}
            ></EventDataRow>
          )
        )}
      </EventTable>
    );
  }

const EventManger = withEventData(EventApp);

export default EventManger;
