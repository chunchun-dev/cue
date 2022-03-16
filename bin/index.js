#! /usr/bin/env node

import inquirer from "inquirer"
import { createProject } from './utils/createProject.js'

const path = process.cwd();

import {prompts, promptsTs} from './utils/prompts.js'

inquirer.prompt(prompts).then((answers) => {
    inquirer.prompt(promptsTs).then((answersTs) => {
        createProject(answers.framework, answers.projectName, path, answersTs.typescript === "Yes")
    })
});
