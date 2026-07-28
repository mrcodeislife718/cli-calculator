# CLI Calculator

**An interactive command-line calculation product built for fast, validated local arithmetic.**

CLI Calculator provides a focused terminal interface for repeated calculations without requiring a browser, hosted account, or graphical application.

## Product purpose

The product is designed to make common calculations quick and reliable through a guided command-line workflow.

Current operations include:

- addition;
- subtraction;
- multiplication;
- division;
- modulo calculations;
- numeric input validation;
- operation selection;
- repeated calculation sessions.

## Operating flow

```text
Launch application
    -> enter first value
    -> enter second value
    -> select operation
    -> validate inputs
    -> execute calculation
    -> display result
    -> continue or exit
```

## Architecture

```text
Interactive CLI
    -> input-validation layer
    -> operation router
    -> calculation functions
    -> formatted result output
    -> repeat-control loop
```

The implementation uses a small CommonJS Node.js application with Inquirer for terminal interaction and modular functions for calculation logic.

## Technology

- Node.js
- JavaScript
- CommonJS modules
- Inquirer

## Installation

```bash
git clone https://github.com/mrcodeislife718/cli-calculator.git
cd cli-calculator
npm install
```

## Run

```bash
node index.js
```

## Example

```text
Enter first number: 10
Enter second number: 5
Choose operation: *
Result: 50
```

## Product direction

The product architecture can expand to support calculation history, scientific operations, unit conversion, configurable precision, saved sessions, and additional interfaces while retaining the command-line product as an independent distribution.

## Repository status

This repository contains the current independent CLI Calculator implementation. It is not classified as a learning exercise, subordinate feature, or placeholder for another product.

## Ownership and licensing

CLI Calculator is independently designed and developed by **Charles Castillo**.

The package is currently distributed under the **ISC License**.
