
    function changeText() {
      const lighght = document.querySelector(".lighght");
        if (lighght.textContent === "lighght") {
            lighght.textContent = ("");
      } else {
            (lighght.textContent) = "lighght";
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
        setInterval(changeText, 5000)
        });
    
