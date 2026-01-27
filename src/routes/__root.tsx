import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import Navbar from "../components/Navbar";

const isTest = import.meta.env.VITE_TEST_FLAG === "1";

export const Route = createRootRoute({
  component: () => (
    <div className="overscroll-none">
      <Navbar />
      <Outlet />
      {!isTest && (
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      )}
    </div>
  ),
});
