
module.exports = {
    description: 'generate vue component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'component name please',
    }],
    actions: data => {
        const name = '{{properCase name}}'
        const actions = [{
            type: 'add',
            path: `src/components/${name}/index.vue`,
            templateFile: 'plop-templates/components/tmp.hbs',
        }]

        return actions
    }
}
