import {
  I18nLocaleTimePicker,
  II18nLocaleCommon,
  II18nLocaleUpload,
  II18nLocaleTypeMap,
  II18nLocaleSelect,
  II18nLocaleTable,
  II18nLocaleCascader,
} from './locale';
import { setLocale, enUS } from './time-locale';

const common: II18nLocaleCommon = {
  confirm: 'Confirm',
  cancel: 'Cancel',
  comma: ', ',
  ok: 'OK',
  reset: 'Reset',
};

export const mark = 'en-US';

const TypeMap: II18nLocaleTypeMap = {
  image: 'Image',
  voice: 'Audio',
};

export const Upload: II18nLocaleUpload = {
  ...common,
  title_voice: 'Choose voice',
  title_image: 'Choose image',
  input: {
    holder: 'Add',
    maxAmount({ maxAmount, type }) {
      return `Only ${maxAmount} ${TypeMap[type]} files can be added`;
    },
    maxSize({ maxSize, type }) {
      return `Cannot upload ${TypeMap[type]} files larger than ${maxSize}`;
    },
    type({ type }) {
      return `Cannot upload ${TypeMap[type]} files with unsupported type`;
    },
  },
  popup: {
    web: 'Web image',
    group: 'Group',
    holder: 'Image url',
    title_voice: 'Local audio',
    title_image: 'Local image',
    type({ types, size }) {
      return `Supports ${types.join(' /')} only, smaller than ${size}`;
    },
    extract: 'Extract',
    extracting: 'Extracting...',
  },
};

export const Select: II18nLocaleSelect = {
  input: 'Please choose...',
  empty: 'No matches found',
};

const QUARTER_NAMES = [
  '1st Quarter',
  '2nd Quarter',
  '3rd Quarter',
  '4th Quarter',
];

export const TimePicker: I18nLocaleTimePicker = () => {
  setLocale(enUS);
  return {
    ...common,
    time: 'Please select a time',
    date: 'Please select a date',
    week: 'Please select a week',
    month: 'Please select a month',
    quarter: 'Please select a quarter',
    year: 'Please select a year',
    range: 'Please select a range',
    timeErrorPop: 'Selected time is unavailable',
    dateErrorPop: 'Selected date is unavailable',
    start: 'Start date',
    end: 'End date',
    startTime: 'Start time',
    endTime: 'End time',
    to: 'to',
    current: {
      time: 'Now',
      date: 'Today',
      week: 'This week',
      month: 'This month',
      year: 'This year',
    },
    panel: {
      hour: '',
      minute: '',
      second: '',
      year: '',
      hourSelect: 'Choose hours',
      minuteSelect: 'Choose minutes',
      secondSelect: 'Choose seconds',
      titleFormat: 'MMMM YYYY',
      quarterNames: QUARTER_NAMES,
      yearQuarterName({ year, quarter }) {
        const val = QUARTER_NAMES[quarter];
        return `${val} of ${year}`;
      },
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  };
};

export const Table: II18nLocaleTable = {
  ...common,
  emptyLabel: 'No data',
};

export const Cascader: II18nLocaleCascader = {
  ...common,
  title: 'Title',
  placeholder: 'Please choose',
};
