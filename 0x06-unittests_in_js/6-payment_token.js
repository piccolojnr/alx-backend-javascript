function getPaymentTokenFromAPI(success) {
  if (success)
    return Promise.resolve({ data: "Successful response from the API" });
  else return Promise.reject("Unsuccessful response from the API");
}

module.exports = getPaymentTokenFromAPI;
