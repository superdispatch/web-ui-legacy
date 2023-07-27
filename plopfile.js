'use strict';

module.exports = (plop) => {
  plop.setGenerator('generator', {
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component do you want to generate?',
        choices: ['Overrides MUI', 'LAB Component'],
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
      } else if (data.type === 'LAB Component') {
        // Here you can define the actions for the 'Lab Component' type
        actions.push(
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/{{pascalCase name}}.tsx`,
            templateFile: 'plop-templates/lab-component/component.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/{{pascalCase name}}.stories.tsx`,
            templateFile: 'plop-templates/lab-component/story.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/__tests__/{{pascalCase name}}.spec.tsx`,
            templateFile: 'plop-templates/lab-component/test.hbs',
          },
          {
            type: 'add',
            path: `packages/${data.folder}/src/{{kebabCase name}}/README.MD`,
            templateFile: 'plop-templates/README.hbs',
          },
        );
      }

      return actions;
    },
  });
};
