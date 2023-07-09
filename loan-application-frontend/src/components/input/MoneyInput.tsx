import { Input, InputProps } from "@nextui-org/react";
import { Control, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

export function MoneyInput({
  control,
  name,
  errors,
  register,
  ...props
}: Partial<InputProps> & { control: Control<any>; name: string; errors: any; register: any }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NumericFormat
          value={field.value}
          onChange={field.onChange}
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          thousandSeparator="."
          contentLeft="R$"
          label={props.label}
          helperColor="error"
          helperText={errors[name] && errors[name].message}
          customInput={Input}
        />
      )}
    />
  );
}
