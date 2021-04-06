// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// https://shields.io/category/license
function renderLicenseBadge(license) {
    const badge = `https://img.shields.io/static/v1?label=License&message=${ license }&color=orange`;
    return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const link = `https://opensource.org/licenses/${ license }`;
    return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == 'none'){
      var emptysection = '';
      return emptysection
    } else {
      var section = `[![License: ${ license }](${ renderLicenseBadge(license) })](${ renderLicenseLink(license) })`;
      return section
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ## Description
  ${data.description}

  ## Table of Content
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contribution](#contribution)
  *[Test](#test)
  *[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.tests}

  ## Questions
  My [Github](https://github.com/${data.github}) and My [email](${data.email})
  `;
}

module.exports = generateMarkdown;
