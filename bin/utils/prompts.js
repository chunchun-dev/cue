// This question would be shown at the starting
export const prompts = [
    {
        type: "text",
        name: "projectName",
        message: "What's the name of your project? "
    },
    {
        type: 'list',
        name: 'framework',
        message: 'Choose the JS framework which you are using:',
        choices: ['React', 'Next'],
    },
];

// This question would be shown only when the user choose either React or NextJS
export const promptsTs = [
    {
        type: 'list',
        name: 'typescript',
        message: 'Does your project use TypeScript?',
        choices: ['Yes', 'No'],
    },
];
