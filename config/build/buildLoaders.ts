import { RuleSetRule } from 'webpack';

const buildLoaders = (): RuleSetRule[] => [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    },
]

export default buildLoaders;