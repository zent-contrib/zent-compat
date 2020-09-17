import * as React from 'react';
import { Omit } from 'utility-types';
import { FormField } from 'zent';
import {
  dateDefaultValueFactory,
  IFormComponentProps,
} from 'zent/es/form/shared';
import { $MergeParams } from 'zent/es/form/utils';

import DatePicker, { IDatePickerProps } from '../../datetimepicker/DatePicker';
import { DatePickers } from '../../datetimepicker/common/types';

export type IFormDatePickerField = IFormComponentProps<
  DatePickers.Value,
  Omit<IDatePickerProps, 'value'>
>;

export const FormDatePickerField: React.FunctionComponent<IFormDatePickerField> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormDatePickerField>).defaultValue ||
        dateDefaultValueFactory
      }
    >
      {childProps => <DatePicker {...props.props} {...childProps} />}
    </FormField>
  );
};
