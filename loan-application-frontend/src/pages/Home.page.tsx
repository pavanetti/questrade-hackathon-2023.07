import { Text } from "@/components/text";
import { SimulationForm } from "@/features/simulation";

export default function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 bg-green-500">
      <div className="flex flex-col justify-center py-24 ">
        <Text h1>Faça sua simulação de crédito</Text>
        <Text em>
          Esta simulação é apenas para fins de informação e não obriga o HackathonCredi a conceder o
          crédito nas condições em que foi calculado.
        </Text>
      </div>
      <div>
        <SimulationForm />
      </div>
    </div>
  );
}
