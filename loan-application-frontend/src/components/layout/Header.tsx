import { Text } from "@/components/text";

export default function Header() {
  return (
    <header className="relative flex p-6">
      <Text h2 as="span" color="$green700">
        HackathonCredi
      </Text>
    </header>
  );
}
