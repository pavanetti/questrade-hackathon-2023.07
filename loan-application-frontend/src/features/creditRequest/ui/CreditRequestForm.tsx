import { Input, MoneyInput } from "@/components/input";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreditRequestFormSchema, schema } from "./schema";

export function CreditRequestForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreditRequestFormSchema>({ resolver: yupResolver(schema) });

  return (
    <form className="flex flex-col space-y-6 m-2" onSubmit={handleSubmit(() => {})}>
      <Input
        type="date"
        label="Data de nascimento"
        name="birthday"
        register={register}
        errors={errors}
      />
      <Input label="CEP" name="postalcode" register={register} errors={errors} />
      <MoneyInput
        label="Renda mensal"
        name="monthlyIncome"
        control={control}
        register={register}
        errors={errors}
      />
      <Input label="Celular (Whatsapp)" name="cellphone" register={register} errors={errors} />
      <Button type="submit">Solicitar</Button>
    </form>
  );
}
