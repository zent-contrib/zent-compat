import * as React from 'react';
import { Omit } from 'utility-types';
import { FormField } from 'zent';
import {
  IFormComponentProps,
  dateRangeDefaultValueFactory,
  IFormFieldChildProps,
} from 'zent/es/form/shared';
import { $MergeParams } from 'zent/es/form/utils';
import { useEventCallbackRef } from 'zent/es/utils/hooks/useEventCallbackRef';

import DateRangeQuickPicker, {
  IDateRangeQuickPickerProps,
} from '../../date-range-quick-picker';
import { DatePickers } from '../../datetimepicker/common/types';

export type IFormDateRangeQuickPickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<IDateRangeQuickPickerProps, 'value'>
>;

const DateRangeQuickPickerField: React.FC<{
  childProps: IFormFieldChildProps<DatePickers.RangeValue>;
  props: IFormDateRangeQuickPickerFieldProps;
}> = ({ childProps, props }) => {
  const [chosenDays, setChosenDays] = React.useState<number | undefined>(
    undefined
  );

  const onChangeRef = useEventCallbackRef(childProps.onChange);

  const onChange = React.useCallback(
    (value: DatePickers.RangeValue, chosenDays: number) => {
      onChangeRef.current?.(value);
      setChosenDays(chosenDays);
    },
    [onChangeRef]
  );

  return (
    <DateRangeQuickPicker
      {...props.props}
      {...childProps}
      chosenDays={chosenDays}
      onChange={onChange}
    />
  );
};

export const FormDateRangeQuickPickerField: React.FunctionComponent<IFormDateRangeQuickPickerFieldProps> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormDateRangeQuickPickerFieldProps>)
          .defaultValue || dateRangeDefaultValueFactory
      }
    >
      {childProps => (
        <DateRangeQuickPickerField childProps={childProps} props={props} />
      )}
    </FormField>
  );
};
