import { useLocation, useNavigate } from "react-router-dom";

import CreditOptionBox from "@/components/CreditOptionBox";
import { Text } from "@/components/text";
import { CreditRequestForm } from "@/features/creditRequest";
import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SimulationResult, simulationResultSchema } from "@/features/simulation/model/types";

export default function CreditRequestPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [options, setOptions] = useState<SimulationResult["options"]>([]);

  useEffect(() => {
    (async () => {
      try {
        console.log(`Validando ${JSON.stringify(state)}`);
        await simulationResultSchema.validate(state);
        setOptions(state.options);
      } catch (err) {
        console.log(`Deu merdinha`);
        console.log(err);
        navigate("/", { replace: true });
      }
    })();
  }, [state]);

  return (
    <div className="max-w-full bg-green-500 flex flex-col items-center px-6 py-12 space-y-12">
      <Card className="max-w-4xl">
        <Card.Header>
          <Text h2>Opções de crédito</Text>
        </Card.Header>
        <Card.Body>
          <Grid.Container gap={2}>
            {options.map((option) => (
              <Grid xs={4} key={option.installments}>
                <CreditOptionBox {...option} />
              </Grid>
            ))}
          </Grid.Container>
        </Card.Body>
      </Card>
      <Card className="max-w-4xl">
        <Card.Header>
          <Text h2>Faça a sua solicitação</Text>
        </Card.Header>
        <Card.Body>
          <CreditRequestForm />
        </Card.Body>
      </Card>
    </div>
  );
}
