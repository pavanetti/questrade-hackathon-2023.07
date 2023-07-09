import { Text } from "@/components/text";

export default function Header() {
  return (
    <header className="relative flex justify-center p-6">
      <div className="max-w-6xl flex-grow">
        <Text h2 as="span" color="$green700">
          HackathonCredi
        </Text>
      </div>
    </header>
  );
}
