import { stringWithoutNonNumerics } from "@/shared/utils";
import { Input, InputProps } from "@nextui-org/react";
import { useState } from "react";
import { Control, Controller, ControllerRenderProps } from "react-hook-form";
import { NumberFormatBase, NumberFormatBaseProps, usePatternFormat } from "react-number-format";

export function DocumentInput({
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
      render={({ field }) => DocumentPattern(field, props, errors, name)}
    />
  );
}
function DocumentPattern(
  field: ControllerRenderProps<any, string>,
  props: Partial<InputProps>,
  errors: any,
  name: string
) {
  const [isCPF, setIsCPF] = useState(true);

  const patternFormatProps: NumberFormatBaseProps<Partial<InputProps>> = usePatternFormat({
    format: isCPF ? "###.###.###-##" : "##.###.###/####-##",
    mask: "_",
  });
  const originalKeyDown = patternFormatProps.onKeyDown!;
  patternFormatProps.onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const value = (e.target as HTMLInputElement).value;
    const doc = stringWithoutNonNumerics(value);

    if (/\d+$/.test(key) && doc.length === 11) {
      setIsCPF(false);
    }
    if (["Delete", "Backspace"].includes(key) && doc.length === 12) {
      setIsCPF(true);
    }

    originalKeyDown(e);
  };

  return (
    <NumberFormatBase
      {...patternFormatProps}
      value={field.value}
      onChange={field.onChange}
      label={props.label}
      helperColor="error"
      helperText={errors[name] && errors[name].message}
      customInput={Input}
    />
  );
}
