import { Text } from "@/components/text";
import { moneyFromNumber } from "@/shared/utils";
import { Card } from "@nextui-org/react";

export interface CreditOptionBoxProps {
  installments: number;
  minInstallment: number;
  maxInstallment: number;
}

export default function CreditOptionBox(props: CreditOptionBoxProps) {
  return (
    <Card isPressable variant="flat">
      <Card.Header className="items-center">
        <Text h4>{props.installments} parcelas de</Text>
      </Card.Header>
      <Card.Body>
        <Text em>
          {moneyFromNumber(props.minInstallment, "BRL")} a{" "}
          {moneyFromNumber(props.maxInstallment, "BRL")}
        </Text>
      </Card.Body>
    </Card>
  );
}
