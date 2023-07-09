import * as yup from "yup";

export interface SimulationRequest {
  request: number;
  email: string;
  fullname: string;
  document: string;
}

export const simulationResultSchema = yup.object({
  request: yup.number().required(),
  options: yup
    .array(
      yup.object({
        installments: yup.number().min(6).max(60).required(),
        minInstallment: yup.number().required(),
        maxInstallment: yup.number().required(),
      })
    )
    .required(),
});

export type SimulationResult = yup.InferType<typeof simulationResultSchema>;
