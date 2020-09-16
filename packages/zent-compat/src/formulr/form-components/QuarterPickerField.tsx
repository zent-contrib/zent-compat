import * as React from 'react';
import { Omit } from 'utility-types';
import { FormField } from 'zent';
import {
  IFormComponentProps,
  dateRangeDefaultValueFactory,
} from 'zent/es/form/shared';
import { $MergeParams } from 'zent/es/form/utils';

import QuarterPicker, {
  IQuarterPickerProps,
} from '../../datetimepicker/QuarterPicker';
import { DatePickers } from '../../datetimepicker/common/types';

export type IFormQuarterPickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<IQuarterPickerProps, 'value'>
>;

export const FormQuarterPickerField: React.FunctionComponent<IFormQuarterPickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormQuarterPickerFieldProps>).defaultValue ||
        dateRangeDefaultValueFactory
      }
    >
      {childProps => <QuarterPicker {...props.props} {...childProps} />}
    </FormField>
  );
};
