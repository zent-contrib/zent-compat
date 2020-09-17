import * as React from 'react';
import { Omit } from 'utility-types';
import { FormField } from 'zent';
import {
  IFormComponentProps,
  dateRangeDefaultValueFactory,
} from 'zent/es/form/shared';
import { $MergeParams } from 'zent/es/form/utils';

import { DatePickers } from '../../datetimepicker/common/types';
import DateRangePicker, {
  IDateRangePickerProps,
} from '../../datetimepicker/DateRangePicker';

export type IFormDateRangePickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<IDateRangePickerProps, 'value'>
>;

export const FormDateRangePickerField: React.FunctionComponent<IFormDateRangePickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormDateRangePickerFieldProps>).defaultValue ||
        dateRangeDefaultValueFactory
      }
    >
      {childProps => <DateRangePicker {...props.props} {...childProps} />}
    </FormField>
  );
};
