import shell from 'shelljs'
import figlet from 'figlet';
import {projectTypes} from './projectTypes.js'
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation'

export const createProject = (projectType, projectName, currPath, typescript) => {
    
    // Project creation
    shell.exec(`git clone ${(projectTypes)[projectType + (typescript ? "TS": "")].repoUrl} ${projectName}`)
    shell.exec(`cd ${currPath}/${projectName}`)


    // Console Message
    console.log("\n")
    console.log(chalk.yellow.bold("New project successfully generated."))
    console.log(`run 'cd ${projectName}' and 'npm install' to get started.`)
    console.log(chalk.greenBright("Happy hacking"))
    console.log("\n")

    /*
    figlet('Project Generated\nHappy hacking', function(err, data) {
        if (err) {
            return;
        }
        console.log(data)
    });
    */
}