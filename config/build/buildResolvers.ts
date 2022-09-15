import { ResolveOptions } from 'webpack';
import { BuildOptions } from "./types/config";

const buildResolvers = (options: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
})

export default buildResolvers;