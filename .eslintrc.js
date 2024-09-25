module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript 插件的推荐规则
    'airbnb-typescript', // Airbnb的typescript配置
    'prettier' // Prettier插件的推荐规则 (用于解决冲突)
    // 'prettier/@typescript-eslint', // Prettier 的 TypeScript 特定规则（如果需要）
    // 'prettier/react', // Prettier 的 React 特定规则（如果需要）
  ],
  parser: '@typescript-eslint/parser', // 使用TypeScript解析器
  globals: {
    React: true
  },
  rules: {

  },
  overrides: [

  ]
}