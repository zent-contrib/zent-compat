import * as React from 'react';
import { Omit } from 'utility-types';
import {
  dateDefaultValueFactory,
  IFormComponentProps,
} from 'zent/es/form/shared';
import { FormField } from 'zent';
import { $MergeParams } from 'zent/es/form/utils';

import YearPicker, { IYearPickerProps } from '../../datetimepicker/YearPicker';
import { DatePickers } from '../../datetimepicker/common/types';

export type IFormYearPickerFieldProps = IFormComponentProps<
  DatePickers.Value,
  Omit<IYearPickerProps, 'value'>
>;

export const FormYearPickerField: React.FunctionComponent<IFormYearPickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormYearPickerFieldProps>).defaultValue ||
        dateDefaultValueFactory
      }
    >
      {childProps => <YearPicker {...props.props} {...childProps} />}
    </FormField>
  );
};
