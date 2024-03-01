//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    await delayFunction(delay);
    
    document.getElementById('output').innerText = text;
  });

  async function delayFunction(delay) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }