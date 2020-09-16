import * as React from 'react';
import { Omit } from 'utility-types';
import {
  IFormComponentProps,
  dateRangeDefaultValueFactory,
} from 'zent/es/form/shared';
import { FormField } from 'zent';
import { $MergeParams } from 'zent/es/form/utils';

import WeekPicker, { IWeekPickerProps } from '../../datetimepicker/WeekPicker';
import { DatePickers } from '../../datetimepicker/common/types';

export type IFormWeekPickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<IWeekPickerProps, 'value'>
>;

export const FormWeekPickerField: React.FunctionComponent<IFormWeekPickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormWeekPickerFieldProps>).defaultValue ||
        dateRangeDefaultValueFactory
      }
    >
      {childProps => <WeekPicker {...props.props} {...childProps} />}
    </FormField>
  );
};
