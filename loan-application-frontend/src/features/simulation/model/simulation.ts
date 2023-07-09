import { baseApi } from "@/shared/api";
import { SimulationRequest, SimulationResult, simulationResultSchema } from "./types";

export const createSimulation = async (_request: SimulationRequest) => {
  const response = await baseApi.post<SimulationResult>("/typicode/demo/posts", {
    request: 4000,
    options: [
      { installments: 6, min: 450, max: 600 },
      { installments: 12, min: 300, max: 350 },
    ],
  });
  // const response = await baseApi.post<SimulationResult>("/simulation.json", request);

  const data = response.data;
  await simulationResultSchema.validate(data);

  return data;
};
