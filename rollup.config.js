import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';

// eslint-disable-next-line import/extensions
import pkg from './package.json';

const input = 'src/index.ts';
const globals = { react: 'React', 'react-dom': 'ReactDOM', '@emotion/styled': 'styled' };
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom', '@emotion/styled'];

export default [
	{
		input,
		output: [
			{
				sourcemap: true,
				file: `dist/${pkg.name}.cjs.js`,
				format: 'cjs'
			},
			{
				sourcemap: true,
				file: `dist/${pkg.name}.es.js`,
				format: 'esm'
			},
			{
				sourcemap: true,
				file: pkg.main,
				format: 'umd',
				name: 'ReactFreeCustomDropDown',
				globals
			}
		],
		external,
		plugins: [
			resolve({ extensions }),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/env', '@babel/preset-react'],
				plugins: [['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }]]
			}),
			commonjs({ include: 'node_modules/**' }),
			typescript({ tsconfig: './tsconfig.json', clean: true }),
			svgr(),
			image(),
			url(),
			peerDepsExternal(),
			sourcemaps()
		]
	}
];