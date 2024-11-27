import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) =>
			rule.test?.test?.(".svg")
		)

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ["@svgr/webpack"],
			}
		)

		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
}

export default withNextIntl(nextConfig)
