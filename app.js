import chalk  from "chalk";

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Why') + chalk.yellow(' did') + chalk.red(' the') + chalk.cyanBright(' programmer') + chalk.blue(' go') + chalk.whiteBright(' broke?'));
log(chalk.magenta('Because') + chalk.greenBright(' he') + chalk.yellowBright(' used') + chalk.blue(' up') + chalk.red(' all') + chalk.cyan(' cache!'));

