// 配置loader
module: {
    rules: [
        {
            test: /\.less$/,
            ues: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                {
                    loader: 'postcss-loader',// 增加postcss-loader
                },
                {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true,
                    },
                }

            ]
        }
    ]
}

