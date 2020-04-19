import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';

import { KEYS } from '../i18n';
import i from '../assets/img/logo.png';
//TODO: Search for a better way to achieve this


const withStatus = (name) => `STATUS_${name.toUpperCase()}`;

function StatisticCard({ field, stats }) {
  const theme = useContext(ThemeContext);
  const { actual, old, percentage } = field;
  const diff = actual - old;
  return (
    <div className={`w-full my-2 md:w-1/2  flex-grow`}>
      <div
        className={`mx-2 py-6 px-3 h-full ${theme.statisticCard.container} shadow-lg rounded-lg flex`}
      >
        <div className="flex-grow">
          <h2 className="text-1xl uppercase">
            <FormattedMessage id={KEYS[withStatus(stats)]}></FormattedMessage>
          </h2>
          <div className="flex items-center">
            <div>
              <h3 className="text-4xl font-bold">{actual}</h3>
            </div>
            <div className="mx-3 bg-white p-1 rounded text-sm text-black">
              {diff > 0 ? '+' : diff < 0 ? '-' : ''}
              {diff}
            </div>
          </div>
          <p>
            <FormattedMessage
              id={KEYS.INCREASE_FROM_YESTERDAY}
              values={{
                number: old,
                percentage: `${percentage}%`,
                type: <FormattedMessage id={KEYS.INCREASE} />,
              }}
            ></FormattedMessage>
          </p>
        </div>
        <div>
        
          <img src={i} alt={stats} />
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;
