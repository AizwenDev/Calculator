   const display = document.getElementById('display');

     function appendValue(value) {
      display.value = (display.value === "0") ? value : display.value + value;
    }


      function clearDisplay() {
      display.value = "";
    }


     function backspace() {
      display.value = display.value.slice(0, -1);
    }


    function calculate() {
      try {
        let result = eval(display.value);
        display.value = result;


      } catch (err) {
        display.value = "Error";
      }
    }

       document.addEventListener('keydown', (e) => {
      const keys = '0123456789+-*/().';
      if (keys.includes(e.key)) appendValue(e.key);
      else if (e.key === 'Enter') calculate();
      else if (e.key === 'Backspace') backspace();
      else if (e.key === 'Delete') clearDisplay();
    });