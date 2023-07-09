import * as yup from "yup";
import { sub } from "date-fns/fp";
import { numberFromPtBr } from "@/shared/utils";

const BIRTHDAY_MESSAGE = "Insira sua data de nascimento";
const MONTHLY_INCOME_MESSAGE = "Insira sua renda mensal";

export const schema = yup.object({
  birthday: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required(BIRTHDAY_MESSAGE)
    .min(sub({ years: 65 }, new Date()), "Você deve possuir menos de 65 anos")
    .max(sub({ years: 18 }, new Date()), "Você deve ser maior de idade"),
  postalcode: yup
    .string()
    .matches(/^\d{5}-\d{3}$/, "Insira um CEP válido")
    .required(),
  monthlyIncome: yup
    .number()
    .transform((_, original) => numberFromPtBr(original))
    .moreThan(0, MONTHLY_INCOME_MESSAGE)
    .required(MONTHLY_INCOME_MESSAGE),
  cellphone: yup.string().required("Insira seu número de celular"),
});

export type CreditRequestFormSchema = yup.InferType<typeof schema>;
