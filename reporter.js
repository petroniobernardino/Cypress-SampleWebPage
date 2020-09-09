const reporter = require('cucumber-html-reporter');

const options = {
        theme: 'bootstrap',
        jsonDir: 'cypress/reports/cucumber-json',
        output:  'cypress/reports/index.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Name":"Relatório Testes Automático de validação de elementos",
            "QA": "Petronio Bernardino",
            "Tested site": "Sample WebPage for Automation Testing",
            "Browser": "Google Chrome v.85.0.4183.83",
            "Platform": "Windows 10",
            "Executed": "Local"
        }
    };

    reporter.generate(options);