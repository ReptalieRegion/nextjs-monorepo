/** @type {import('next').NextConfig} */
module.exports = {
    transpilePackages: ['@repo/ui'],
    webpack: (config) => {
        // 기존 URL 파일로더 규칙을 가져옵니다.
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

        // 기존 파일로더에 새로 추가한 `@svgr/webpack` 규칙을 추가합니다.
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                // 후에 설명할 리소스 쿼리입니다.
                resourceQuery: { not: /components/ },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: /components/,
                use: ['@svgr/webpack'],
            },
        );
        config.resolve.alias.canvas = false;
        return config;
    },
};
