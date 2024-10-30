import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import stylesUrl from "./styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
