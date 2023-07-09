import { Text } from "@/components/text";

export default function Footer() {
  return (
    <footer className="relative flex justify-center p-6 bg-green-500">
      <div className="max-w-6xl flex-grow">
        <Text h2 as="span" color="white">
          HackathonCredi
        </Text>
      </div>
    </footer>
  );
}
