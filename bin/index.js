#! /usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');
const { createProject } = require('./utils/createProject.js');

const path = process.cwd();

const { prompts, promptsTs } = require('./utils/prompts.js');

inquirer.prompt(prompts).then((answers) => {
    inquirer.prompt(promptsTs).then((answersTs) => {
        createProject(answers.framework, answers.projectName, path, answersTs.typescript === "Yes")
    })
});
