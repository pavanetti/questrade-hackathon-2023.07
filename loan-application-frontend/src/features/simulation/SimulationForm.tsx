import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { DocumentInput, Input, MoneyInput } from "@/components/input";
import { Text } from "@/components/text";

import { schema, SimulationFormSchema } from "./SimulationForm.schema";

export function SimulationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SimulationFormSchema>({ resolver: yupResolver(schema) });

  return (
    <form
      className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit(() => {
        console.log("É hora de morfar");
      })}
    >
      <MoneyInput
        label="De quanto você precisa?"
        control={control}
        name="loanValue"
        register={register}
        errors={errors}
      />
      <Input label="Qual o seu email?" name="email" register={register} errors={errors} />

      <Input label="Qual o seu nome completo?" name="name" register={register} errors={errors} />
      <DocumentInput
        label="Qual o seu CPF ou CNPJ?"
        name="document"
        control={control}
        register={register}
        errors={errors}
      />
      <Text small>
        Vamos analisar o seu perfil de crédito e entrar em contato oferencendo a melhor opção de
        empréstimo.
      </Text>
      <Button type="submit">Simular</Button>
    </form>
  );
}
