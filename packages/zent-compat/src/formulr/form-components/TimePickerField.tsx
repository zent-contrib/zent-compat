import * as React from 'react';
import { Omit } from 'utility-types';
import {
  dateDefaultValueFactory,
  IFormComponentProps,
} from 'zent/es/form/shared';
import { FormField } from 'zent';
import { $MergeParams } from 'zent/es/form/utils';

import { DatePickers } from '../../datetimepicker/common/types';
import TimePicker, { ITimePickerProps } from '../../datetimepicker/TimePicker';

export type IFormTimePickerField = IFormComponentProps<
  DatePickers.Value,
  Omit<ITimePickerProps, 'value'>
>;

export const FormTimePickerField: React.FunctionComponent<IFormTimePickerField> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormTimePickerField>).defaultValue ||
        dateDefaultValueFactory
      }
    >
      {childProps => <TimePicker {...props.props} {...childProps} />}
    </FormField>
  );
};
