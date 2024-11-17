import unleash from "./unleash";
import { defineNitroPlugin, useRuntimeConfig } from "#imports";
import { ModuleOptions } from "~/src/module";

export default defineNitroPlugin(async (nitroApp) => {
  const unleashConfig = useRuntimeConfig().unleash as ModuleOptions
  console.info('Initializing unleash-client...');
  await unleash(unleashConfig)
  console.info('Unleash initialized!');
})
