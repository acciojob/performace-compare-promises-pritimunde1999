// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from an API URL and measure the time taken
function fetchDataWithTime(url) {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        resolve(timeTaken);
      })
      .catch((error) => reject(error));
  });
}

// Function to fetch data using Promise.all() and display the result
function fetchWithPromiseAll() {
  Promise.all(apiUrls.map(fetchDataWithTime))
    .then((times) => {
      const sumTime = times.reduce((total, time) => total + time, 0);
      const avgTime = sumTime / times.length;
      const outputDiv = document.getElementById("output-all");
      outputDiv.textContent = `${avgTime.toFixed(2)} ms`;
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

// Function to fetch data using Promise.any() and display the result
function fetchWithPromiseAny() {
  Promise.any(apiUrls.map(fetchDataWithTime))
    .then((time) => {
      const outputDiv = document.getElementById("output-any");
      outputDiv.textContent = `${time.toFixed(2)} ms`;
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

// Call the functions to compare the performance
fetchWithPromiseAll();
fetchWithPromiseAny();

