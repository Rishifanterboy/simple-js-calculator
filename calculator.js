const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const handleInput = (id) => {
  if (id === "clear") {
    display.innerText = "";
  } else if (id === "backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if (display.innerText !== "" && id === "equals") {
    try {
      display.innerText = eval(display.innerText);
    } catch (e) {
      display.innerText = "Error!";
    }
  } else if (display.innerText == "" && id === "equals") {
    display.innerText = " WTF! ";
    setTimeout(() => (display.innerText = ""), 2000);
  } else {
    display.innerText += id;
  }
};

buttons.forEach((item) => {
  item.onclick = () => {
    handleInput(item.id);
  };
});

document.addEventListener("keydown", (e) => {
  const keys = e.key;

  if (/^[0-9/*+-.]$/.test(keys)) {
    handleInput(keys);
  }

  if (key === "Enter" && display.innerText !== "") {
    handleInput("equals");
  }

  if (keys === "Backspace") {
    handleInput("backspace");
  }

  if (keys === "Escape") {
    handleInput("clear");
  }
});
