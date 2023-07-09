import { useRouteError } from "react-router-dom";
import { Text } from "@/components/text";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <Text h1>Oops!</Text>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text em>{error.statusText || error.message}</Text>
      </div>
    </div>
  );
}
