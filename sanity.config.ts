import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "ov76rnsk",
  dataset: "production",
  apiVersion: "2023-04-10",
  title: "My Projects",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
