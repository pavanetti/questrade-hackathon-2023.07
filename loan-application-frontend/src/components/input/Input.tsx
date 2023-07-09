import { Input as NuiInput, InputProps } from "@nextui-org/react";

export function Input({
  errors,
  register,
  name,
  ...props
}: Partial<InputProps> & { name: string; errors: any; register: any }) {
  return (
    <NuiInput
      {...props}
      name={name}
      helperColor="error"
      helperText={errors[name] && errors[name].message}
      {...register(name)}
    />
  );
}
