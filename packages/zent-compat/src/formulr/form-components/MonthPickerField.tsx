import * as React from 'react';
import { Omit } from 'utility-types';
import { FormField } from 'zent';
import {
  dateDefaultValueFactory,
  IFormComponentProps,
} from 'zent/es/form/shared';
import { $MergeParams } from 'zent/es/form/utils';

import MonthPicker, {
  IMonthPickerProps,
} from '../../datetimepicker/MonthPicker';
import { DatePickers } from '../../datetimepicker/common/types';

export type IFormMonthPickerFieldProps = IFormComponentProps<
  DatePickers.Value,
  Omit<IMonthPickerProps, 'value'>
>;

export const FormMonthPickerField: React.FunctionComponent<IFormMonthPickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormMonthPickerFieldProps>).defaultValue ||
        dateDefaultValueFactory
      }
    >
      {childProps => <MonthPicker {...props.props} {...childProps} />}
    </FormField>
  );
};
