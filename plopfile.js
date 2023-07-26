'use strict';

module.exports = (plop) => {
  plop.setGenerator('generator', {
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component do you want to generate?',
        choices: ['Overrides MUI', 'New Component'],
      },
      {
        type: 'list',
        name: 'folder',
        message: 'Choose a folder:',
        choices: ['ui', 'lab', 'dates', 'forms'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions(data) {
      let actions = [];

      if (data.type === 'Overrides MUI') {
        // Here you can define the actions for the 'Overrides' type
        // The path should be adjusted based on your project structure
        actions.push(
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/{{pascalCase name}}.tsx`,
            templateFile: 'plop-templates/overrides/component.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/{{pascalCase name}}.stories.tsx`,
            templateFile: 'plop-templates/overrides/story.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/__tests__/{{pascalCase name}}.spec.tsx`,
            templateFile: 'plop-templates/overrides/test.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/{{pascalCase name}}.playroom.tsx`,
            templateFile: 'plop-templates/overrides/playroom.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/README.MD`,
            templateFile: 'plop-templates/README.hbs',
          },
        );
      } else if (data.type === 'New Component') {
        // Here you can define the actions for the 'New Component' type
        // The path should be adjusted based on your project structure
        actions.push({
          type: 'add',
          path: `packages/${data.folder}/src/{{pascalCase name}}/{{pascalCase name}}.js`,
          templateFile: 'plop-templates/component.hbs',
        });
      }

      return actions;
    },
  });
};
