//your JS code here. If required.
async function dd() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    await delayFunction(delay);
    
    document.getElementById('output').innerText = text;
  }

document.getElementById('btn').addEventListener('click', dd);

  async function delayFunction(delay) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }