// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos a la API
    return fetch('https://adalab-api.herokuapp.com/api/random/word/') // Este 5 es el id de Leia Skywalker
      .then((response) => response.json())
      .then((response) => {
        
        return response;
      });
  };
  
  export default callToApi;