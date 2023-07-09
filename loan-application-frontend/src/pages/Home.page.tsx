import { Text } from "@/components/text";
import { SimulationForm } from "@/features/simulation";

export default function HomePage() {
  return (
    <div className="max-w-full bg-green-500 flex justify-center">
      <div className="max-w-6xl grid grid-cols-2 gap-4 p-6 ">
        <div className="flex flex-col justify-center py-24 ">
          <Text h1>Faça sua simulação de crédito</Text>
          <Text em>
            Esta simulação é apenas para fins de informação e não obriga o HackathonCredi a conceder
            o crédito nas condições em que foi calculado.
          </Text>
        </div>
        <div className="px-6 flex justify-center">
          <div className="max-w-sm">
            <SimulationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
