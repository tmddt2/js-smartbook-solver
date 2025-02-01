var courseId = "cf3ce96e-01d5-4dad-a6cb-f9596a0b5219"; /* Put the id of your course here (See README.md for instructions on how to find yours!!) */
fetch("https://raw.githubusercontent.com/rainbrot/js-smartbook-solver/refs/heads/main/solver.js").then(result => result.text()).then((solverCode) => {
    eval(solverCode.replace('var courseId = "', 'var courseId = "' + courseId));
});
