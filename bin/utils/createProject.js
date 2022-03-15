const shell = require('shelljs');
var figlet = require('figlet');
const { projectTypes } = require('./projectTypes');

const createProject = (projectType, projectName, currPath, typescript) => {
    
    shell.exec(`git clone ${(projectTypes)[projectType + (typescript ? "TS": "JS")].repoUrl} ${projectName}`)
    shell.exec(`cd ${currPath}/${projectName}`)
    shell.exec('npm i')

    figlet('Project Generated\nHappy hacking', function(err, data) {
        if (err) {
            return;
        }
        console.log(data)
    });
}

module.exports.createProject = createProject;