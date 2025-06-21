# Contributing to Guess That Tune 🎵

First off, thank you for considering contributing to Guess That Tune! It's people like you that make this project such a great tool.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps to reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements ✨

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful

### Pull Requests 🚀

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in the template
2. Follow our coding standards
3. After you submit your pull request, verify that all status checks are passing

#### Coding Standards

* Use TypeScript for all new code
* Follow the Vue.js Style Guide
* Use Prettier for code formatting
* Write meaningful commit messages following Conventional Commits
* Add tests for new features
* Update documentation for changes

### Development Process

1. Fork the repo and create your branch from `main`
2. Install dependencies: `npm install`
3. Make your changes
4. Add tests if applicable
5. Run the test suite: `npm test`
6. Ensure the code lints: `npm run lint`
7. Submit your pull request

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐛 `:bug:` when fixing a bug
    * ✨ `:sparkles:` when adding a new feature
    * 📝 `:memo:` when writing docs
    * 🔧 `:wrench:` when updating configuration files

### Testing

* Write tests for new features
* Run existing tests before submitting a PR
* Ensure all tests pass locally

### Documentation

* Update the README.md with details of changes to the interface
* Update the API documentation for any changed endpoints
* Add notes to the changelog about what you changed

## Project Structure

```typescript
guessThatTune/
├── components/    # Vue components
├── pages/        # Route components
├── stores/       # Pinia stores
├── server/       # Server API routes
├── assets/       # Static assets
├── public/       # Public files
└── tests/        # Test files
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Visit http://localhost:3000

## Questions?

Don't hesitate to reach out to the maintainers if you have any questions!

## License

By contributing, you agree that your contributions will be licensed under its MIT License.