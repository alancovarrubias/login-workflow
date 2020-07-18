const isTest = String(process.env.NODE_ENV) === 'test'
const isProd = String(process.env.NODE_ENV) === 'production'

module.exports = api => {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ]
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
  ]
  return {
    presets,
    plugins,
  }
}
