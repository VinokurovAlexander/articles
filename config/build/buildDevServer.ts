import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
    port: options.port,
    open: true
})

export default buildDevServer;