import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";

import router from "@/app/router";
import theme from "@/app/theme";
import { queryClient } from "@/shared/api";

function Entry() {
  return (
    <NextUIProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default Entry;
