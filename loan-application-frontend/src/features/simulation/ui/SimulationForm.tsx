import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { DocumentInput, Input, MoneyInput } from "@/components/input";
import { Text } from "@/components/text";
import { createSimulation } from "@/features/simulation/model";
import { schema, SimulationFormSchema } from "./schema";

export function SimulationForm() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SimulationFormSchema>({ resolver: yupResolver(schema) });

  const onSubmit = useCallback((data: SimulationFormSchema) => {
    createSimulation({
      request: data.loanValue,
      fullname: data.name,
      email: data.email,
      document: data.document,
    }).then((result) => navigate("/credit-request", { state: result }));
  }, []);

  return (
    <form
      className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
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
