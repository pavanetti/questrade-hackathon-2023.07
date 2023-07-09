import { useLocation } from "react-router-dom";

import CreditOptionBox from "@/components/CreditOptionBox";
import { Text } from "@/components/text";
import { CreditRequestForm } from "@/features/creditRequest";
import { Card, Grid } from "@nextui-org/react";

export default function CreditRequestPage() {
  const location = useLocation();

  const options = [
    { installments: 6, min: 450, max: 600 },
    { installments: 12, min: 300, max: 350 },
    { installments: 24, min: 300, max: 350 },
    { installments: 36, min: 300, max: 350 },
    { installments: 48, min: 300, max: 350 },
    { installments: 60, min: 300, max: 350 },
  ];

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
