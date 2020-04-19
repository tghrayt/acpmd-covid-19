import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StatisticCard } from '.';
import { KEYS } from '../i18n';

function Statistics({
  data: { recovered, deaths, confirmed, negatives, tested, actives },
}) {
  return (
    <article className="py-4">
      <h1 className="py-2 font-bold text-3xl">
        <FormattedMessage id={KEYS.STATISTICS}></FormattedMessage>
      </h1>
      <div className="flex flex-wrap ">
        <StatisticCard stats="confirmed" field={confirmed} ></StatisticCard>
        <StatisticCard stats="actives" field={actives}></StatisticCard>
        <StatisticCard stats="recovered" field={recovered}></StatisticCard>
        <StatisticCard stats="deaths" field={deaths}></StatisticCard>
        <StatisticCard stats="tested" field={tested}></StatisticCard>
        <StatisticCard stats="negatives" field={negatives}></StatisticCard>
      </div>
    </article>
  );
}

export default Statistics;
