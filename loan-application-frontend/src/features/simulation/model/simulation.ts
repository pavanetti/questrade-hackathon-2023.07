import { baseApi } from "@/shared/api";
import { SimulationRequest, SimulationResult, simulationResultSchema } from "./types";

export const createSimulation = async (request: SimulationRequest) => {
  const response = await baseApi.get<SimulationResult>("/creditSimulation", { params: request });

  const data = response.data;
  await simulationResultSchema.validate(data);

  return data;
};
