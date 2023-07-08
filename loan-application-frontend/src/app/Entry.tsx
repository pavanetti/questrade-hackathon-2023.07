import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import router from "@/app/router";
import theme from "@/app/theme";

function Entry() {
  return (
    <NextUIProvider theme={theme}>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default Entry;
