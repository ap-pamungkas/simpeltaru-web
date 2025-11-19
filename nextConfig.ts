import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    webpack: (config, {isServer}) => {

        config.module.rules.push({
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: /node_modules\/@mapbox|node_modules\/leaflet/, // Contoh library yang sering bermasalah
        });

        return config;
    },
    turbopack: {},
};
export default nextConfig;