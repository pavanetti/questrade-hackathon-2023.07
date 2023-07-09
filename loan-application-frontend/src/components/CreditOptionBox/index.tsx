import { Text } from "@/components/text";
import { moneyFromNumber } from "@/shared/utils";
import { Card } from "@nextui-org/react";

interface CreditOptionBoxProps {
  installments: number;
  min: number;
  max: number;
}

export default function CreditOptionBox(props: CreditOptionBoxProps) {
  return (
    <Card isPressable variant="flat">
      <Card.Header className="items-center">
        <Text h4>{props.installments} parcelas de</Text>
      </Card.Header>
      <Card.Body>
        <Text em>
          {moneyFromNumber(props.min, "BRL")} a {moneyFromNumber(props.max, "BRL")}
        </Text>
      </Card.Body>
    </Card>
  );
}
