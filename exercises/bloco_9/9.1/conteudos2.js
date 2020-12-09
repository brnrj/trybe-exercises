const countryName = ({ name }) => `Returned country is ${name}`;
const countryCurrency = ({ name, currency }) => `${name}'s currency is the ${currency}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => `Error getting country: ${error}`;

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brazil',
        hdi: 0.759,
        currency: 'Real',
      };
      console.log(onSuccess(country));
    } else {
      const errorMessage = 'Country could not be found';
      console.log(callback(errorMessage));
    }
  }, delay(5000));
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);
