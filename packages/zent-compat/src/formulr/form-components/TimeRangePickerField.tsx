import * as React from 'react';
import { Omit } from 'utility-types';
import {
  IFormComponentProps,
  dateRangeDefaultValueFactory,
} from 'zent/es/form/shared';
import { FormField } from 'zent';
import { $MergeParams } from 'zent/es/form/utils';

import { DatePickers } from '../../datetimepicker/common/types';
import TimeRangePicker, {
  ITimeRangePickerProps,
} from '../../datetimepicker/TimeRangePicker';

export type IFormTimeRangePickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<ITimeRangePickerProps, 'value'>
>;

export const FormTimeRangePickerField: React.FunctionComponent<IFormTimeRangePickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormTimeRangePickerFieldProps>).defaultValue ||
        dateRangeDefaultValueFactory
      }
    >
      {childProps => <TimeRangePicker {...props.props} {...childProps} />}
    </FormField>
  );
};
