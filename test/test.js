const expect = require('chai').expect
const CLIEngine = require('eslint').CLIEngine
const eslintConfig = require('..')

describe('eslint-config', () => {
  it('should export an object', () => {
    expect(eslintConfig).to.be.an('object');
  })

  it('should extend eslint:recommended', () => {
    expect(eslintConfig).to.have.property('extends')
    expect(eslintConfig['extends']).to.equal('eslint:recommended')
  })

  it('should lint', () => {
    const cli = new CLIEngine(eslintConfig)
    const report = cli.executeOnText('', 'fake.txt');
    expect(report.errorCount).to.equal(0);
  })
})
