// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.projectName}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
     
  - [Installation](#installation)
  - [Usage](#usage)
  
  ## Installation
  
  ${data.installationInstructions}
  
  ## Usage
  
  ${data.usageInfo}

  ---
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
  ## How to Contribute
  
  ${data.contribution}
  
  ## Tests
  
  ${data.testInstructions}
`
};

module.exports = {generateMarkdown};