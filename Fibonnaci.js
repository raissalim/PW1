
function generateFibonacci() {
      let n = parseInt(document.getElementById('numberInput').value);
      let fibonacciSeries = [];

      if (n === 0) {
        fibonacciSeries.push(0);
      } else if (n === 1) {
        fibonacciSeries.push(0, 1);
      } else {
        fibonacciSeries.push(0, 1);
        for (let i = 2; i < n; i++) {
          let newTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
          fibonacciSeries.push(newTerm);
        }
      }

      document.getElementById('fibonacciSeries').innerText = 'Série de Fibonacci: ' + fibonacciSeries.join(', ');
    }
