// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  //using shields.io > structure should be [![License: XXX] (url of badge)]
  //use case switch 
  switch (license) {
    case 'MIT':
     return '[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)]'
    case 'GPLv3':
      return '[![GPL v3 License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]'
    case 'Apache 2.0':
      return '[![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-purple.svg)]'
    case 'Mozilla Public License 2.0':
      return '[![Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-orange.svg)]'
    case 'No License':
      return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
//switch statement containing [license] (badge url)

switch (license) {
  case 'MIT':
    return '[MIT License](https://opensource.org/licenses/MIT)'
  case 'GPLv3':
    return '[GPL v3 License](https://opensource.org/licenses/gpl-3.0)'
  case 'Apache 2.0':
    return '[Apache License 2.0](https://opensource.org/licenses/apache-2.0)'
  case 'Mozilla Public License 2.0':
    return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
  case 'No License':
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
//if the 'No License' is selected in the prompt, then no section should be created, but if there is then the license section should be added. 
  switch(license)  {
    case 'No License':
      return '';
    default:
      return `#License
              ##${license}
              This project is licensed under the ${renderLicenseLink(license)}.` 
  }
}
//need one for Table of Contents as well or else it will still appear in the main table of contents. 
function renderTableofContents(license){
  switch(license) {
    case 'No License':
      return '';
    default:
      return '* [License](#license)' 
  }

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
