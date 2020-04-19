import React from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';
import { KEYS } from '../i18n';

const LastUpdate = ({ lastUpdate }) => {
  return (
    <h6 className=" text-gray-600">
      <FormattedMessage
        id={KEYS.LAST_UPDATED}
        values={{
          day: (
            <FormattedDate
              value={new Date(lastUpdate)}
              year="numeric"
              month="long"
              day="numeric"
            />
          ),
          hour: <FormattedTime value={new Date(lastUpdate)}></FormattedTime>,
        }}
      ></FormattedMessage>
    </h6>
  );
};

export default LastUpdate;
