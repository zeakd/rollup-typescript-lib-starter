import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: {
      dir: './',
      entryFileNames: pkg.main,
      format: 'cjs',
      indent: false,
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'types/',
      }),
    ]
  },

  // ES
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'es',
      indent: false
    },
    plugins: [
      typescript(),
    ]
  },

  // UMD Production
  {
    input: 'src/index.ts',
    output: {
      file: pkg.unpkg,
      format: 'umd',
      name: 'myLib',
      indent: false
    },
    plugins: [
      typescript(),
    ]
  },
]