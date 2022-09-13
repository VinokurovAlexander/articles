import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: paths.html
    })
]

export default buildPlugins;