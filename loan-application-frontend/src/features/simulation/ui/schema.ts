import * as yup from "yup";
import { validate as isCPF } from "validation-br/dist/cpf";
import { validate as isCNPJ } from "validation-br/dist/cnpj";
import { DOC_REGEX, numberFromPtBr } from "@/shared/utils";

const MIN_LOAN_VALUE = 2000;
const MIN_LOAN_MESSAGE = "Insira um valor mínimo de R$ 2.000,00";

const INVALID_DOCUMENT_MESSAGE = "Insira um documento válido";

export const schema = yup
  .object({
    loanValue: yup
      .number()
      .transform((_, original) => numberFromPtBr(original))
      .min(MIN_LOAN_VALUE, MIN_LOAN_MESSAGE)
      .required(MIN_LOAN_MESSAGE),
    email: yup.string().email("Insira um email válido").required("Insira o seu email"),
    name: yup
      .string()
      .test("name with surname", "Insira o nome completo", (name) => name?.trim().includes(" "))
      .required(),
    document: yup
      .string()
      .matches(DOC_REGEX, INVALID_DOCUMENT_MESSAGE)
      .required("Insira o seu CPF ou o seu CNPJ")
      .test("valid document", INVALID_DOCUMENT_MESSAGE, (doc) => isCPF(doc) || isCNPJ(doc)),
  })
  .required();

export type SimulationFormSchema = yup.InferType<typeof schema>;
