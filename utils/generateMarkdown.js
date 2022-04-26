// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'PDDL - Public Domain Dedication License':
      return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]';
    case 'GNU - General Use License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'I do not want a license.':
    default: 
      return ''
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    case 'PDDL - Public Domain Dedication License':
      return '(https://opendatacommons.org/licenses/pddl/)';
    case 'GNU - General Use License':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'I do not want a license.':
    default: 
      return ''
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License 

  ${renderLicenseBadge(license)}${renderLicenseLink(license)}
  `;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.projectName}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
     
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Badges](#badges)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installationInstructions}
  
  ## Usage
  
  ${data.usageInfo}
  ${renderLicenseSection(data.license)}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
  ## How to Contribute
  
  ${data.contribution}
  
  ## Tests
  
  ${data.testInstructions}

  ## Questions
  
  Find me at [${data.github}](https://github.com/${data.github}) on GitHub for more information.
  Email me directly at ${data.email}.
`
};

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};