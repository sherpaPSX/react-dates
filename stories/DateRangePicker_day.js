import React from 'react';
import from ';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import isSameDay from '../src/utils/isSameDay';
import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';

import CustomizableCalendarDay from '../src/components/CustomizableCalendarDay';

import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';

const datesList = [
  ),
  ).add(1, 'days'),
  ).add(3, 'days'),
  ).add(9, 'days'),
  ).add(10, 'days'),
  ).add(11, 'days'),
  ).add(12, 'days'),
  ).add(13, 'days'),
];

const selectedStyles = {
  background: '#590098',
  border: '1px solid #590098',
  color: '#fff',

  hover: {
    background: '#7A32AC',
    border: '1px solid #7A32AC',
    color: '#fff',
  },
};

const hoveredStyles = {
  background: '#cd99d0',
  border: '1px solid #cd99d0',
  color: '#fff',
};

const blockedStyles = {
  background: '#fff',
  border: '1px double #e4e7e7',
  color: '#dce0e0',

  hover: {
    background: '#fff',
    border: '1px double #e4e7e7',
    color: '#dce0e0',
  },
};

const customDayStyles = {
  selectedStartStyles: selectedStyles,
  selectedEndStyles: selectedStyles,
  hoveredSpanStyles: hoveredStyles,
  afterHoveredStartStyles: hoveredStyles,
  blockedMinNightsStyles: blockedStyles,
  blockedCalendarStyles: blockedStyles,
  blockedOutOfRangeStyles: blockedStyles,

  selectedSpanStyles: {
    background: '#9b32a2',
    border: '1px solid #9b32a2',
    color: '#fff',

    hover: {
      background: '#83008b',
      border: '1px solid #83008b',
      color: '#fff',
    },
  },
};

storiesOf('DRP - Day Props', module)
  .add('default', withInfo()(() => (
    <DateRangePickerWrapper autoFocus />
  )))
  .add('with minimum nights set', withInfo()(() => (
    <DateRangePickerWrapper
      minimumNights={3}
      initialStartDate={).add(3, 'days')}
      autoFocusEndDate
    />
  )))
  .add('allows single day range', withInfo()(() => (
    <DateRangePickerWrapper
      minimumNights={0}
      initialStartDate={).add(3, 'days')}
      autoFocusEndDate
    />
  )))
  .add('allows all days, including past days', withInfo()(() => (
    <DateRangePickerWrapper
      isOutsideRange={() => false}
      autoFocus
    />
  )))
  .add('allows next two weeks only', withInfo()(() => (
    <DateRangePickerWrapper
      isOutsideRange={day =>
        !isInclusivelyAfterDay(day, )) ||
        isInclusivelyAfterDay(day, ).add(2, 'weeks'))
      }
      autoFocus
    />
  )))
  .add('with some blocked dates', withInfo()(() => (
    <DateRangePickerWrapper
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  )))
  .add('with some highlighted dates', withInfo()(() => (
    <DateRangePickerWrapper
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  )))
  .add('blocks fridays', withInfo()(() => (
    <DateRangePickerWrapper
      isDayBlocked={day => weekdays(day.weekday()) === 'Friday'}
      autoFocus
    />
  )))
  .add('with custom daily details', withInfo()(() => (
    <DateRangePickerWrapper
      renderDayContents={day => <td className="foo-bar">{day.format('ddd')}</td>}
      autoFocus
    />
  )))
  .add('one-off custom styling', withInfo()(() => (
    <DateRangePickerWrapper
      minimumNights={3}
      renderCalendarDay={props => <CustomizableCalendarDay {...props} {...customDayStyles} />}
      autoFocus
    />
  )));
