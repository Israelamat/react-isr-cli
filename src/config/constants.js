import chalk from 'chalk';
//ready in case predefined folders need to be added.
export const FOLDER_MAP = {
  component: 'src/',
  interface: 'src/',
  service: 'src/',
};

export const ALIAS_MAP = {
  'c': 'component',
  'ct': 'componenttailwind',
  'ccss': 'componentcss',
  'i': 'interface',
  'sf': 'servicef',
  'sa': 'servicea',
  'h': 'hooks',
  'r': 'routes',
  'f': 'feature'

};

export const TYPE_CHOICES = [
  { name: 'Component', value: 'component' },
  { name: 'Service', value: 'service' },
  { name: 'Interface', value: 'interface' }
];

export const HELP_TEXT = `
${chalk.bold.yellow('COMMANDS:')}
  ${chalk.green('g, generate')} [type] [path]   Generate a new file based on templates.

${chalk.bold.yellow('AVAILABLE ALIASES:')}
  ${chalk.cyan('c      ')} -> ${chalk.white('component')}
  ${chalk.cyan('ct     ')} -> ${chalk.white('componenttailwind')}
  ${chalk.cyan('ccss   ')} -> ${chalk.white('componentcss')}
  ${chalk.cyan('i      ')} -> ${chalk.white('interface')}
  ${chalk.cyan('sf     ')} -> ${chalk.white('servicef')}
  ${chalk.cyan('sa     ')} -> ${chalk.white('servicea')}
  ${chalk.cyan('feature')} -> ${chalk.white('feature')}

${chalk.bold.yellow('EXAMPLES:')}
  $ rg g c UserCard             ${chalk.gray('# Create a component in src/UserCard.tsx')}
  $ rg g sa auth/login          ${chalk.gray('# Create an Axios service in src/auth/login.ts')}
  $ rg g i models/User          ${chalk.gray('# Create an interface in src/models/User.ts')}
  $ rg g f Post                 ${chalk.gray('# Create a entire new feature in src/features/Post')}
`;

export default { FOLDER_MAP, ALIAS_MAP, TYPE_CHOICES, HELP_TEXT };