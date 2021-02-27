document.addEventListener("DOMContentLoaded", (event) => {
  let num = 0;

  const increment = (e) => {
    e.preventDefault();
    num++;
    document.querySelector(
      "#counter"
    ).innerHTML = `You have clicked the button ${num} times.`;
  };

  document.querySelector("#btn").addEventListener("click", increment);
});
