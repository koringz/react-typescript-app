module.exports = {
    description: 'generate a page',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'view name please',
    }],
    actions: data => {
        const name = '{{properCase name}}'
        const actions = [
            {
                type: 'add',
                path: `src/pages/${name}/index.tsx`,
                templateFile: 'plop-templates/pages/tmp.hbs',
            },
            {
                type: 'add',
                path: `src/pages/${name}/index.css`,
                templateFile: 'plop-templates/pages/style.hbs',
            }
        ]

        return actions
    }
}