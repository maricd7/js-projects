
const convertBtn = document.getElementById('convertBtn');
const baseCurrency = 'USD';
const url = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;
const fromSelect = document.getElementById('selectFrom');
const toSelect = document.getElementById('selectTo');

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const rates = data.rates;

    for (const currency in rates) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      fromSelect.appendChild(option);
    }
 
    for (const currency in rates) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      toSelect.appendChild(option);
    }

    convertBtn.addEventListener('click', () => {
        const input = document.getElementById('inputAmount').value;
        const selectionValue = fromSelect.value;
        const toValue = toSelect.value;
        console.log(selectionValue);
        let result = input *rates[toValue]; 
        const resultElement = document.getElementById('response');
        resultElement.innerText = result;
        

    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
