export interface II18nLocaleCommon {
  confirm: string;
  cancel: string;
  ok: string;
  comma: string;
  reset: string;
}

export interface II18nLocaleTypeMap {
  image: string;
  voice: string;
}

export interface II18nLocaleUpload extends II18nLocaleCommon {
  title_voice: string;
  title_image: string;
  input: {
    holder: string;
    maxAmount(options: { maxAmount: number; type: string }): string;
    maxSize(options: { maxSize: number; type: string }): string;
    type(options: { type: string }): string;
  };
  popup: {
    web: string;
    group: string;
    holder: string;
    title_voice: string;
    title_image: string;
    type(options: { types: string[]; size: number }): string;
    extract: string;
    extracting: string;
  };
}

export interface II18nLocaleSelect {
  input: string;
  empty: string;
}

export interface II18nLocaleTimePicker extends II18nLocaleCommon {
  time: string;
  date: string;
  week: string;
  month: string;
  quarter: string;
  year: string;
  range: string;
  timeErrorPop: string;
  dateErrorPop: string;
  start: string;
  end: string;
  startTime: string;
  endTime: string;
  to: string;
  current: {
    time: string;
    date: string;
    week: string;
    month: string;
    year: string;
  };
  panel: {
    hour: string;
    minute: string;
    second: string;
    year: string;
    hourSelect: string;
    minuteSelect: string;
    secondSelect: string;
    titleFormat: string;
    quarterNames: string[];
    yearQuarterName(options: { year: number; quarter: number }): string;
    dayNames: string[];
    monthNames: string[];
  };
}

export type I18nLocaleTimePicker = () => II18nLocaleTimePicker;
export interface II18nLocaleTable extends II18nLocaleCommon {
  emptyLabel: string;
}

export interface II18nLocaleCascader extends II18nLocaleCommon {
  title: React.ReactNode;
  placeholder: string;
}
