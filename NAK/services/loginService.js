const request = require('request-promise-native');


const getToken = (user, pass) => {
  const optionsPOST = {
    method: 'POST',
    uri: 'https://api-dev.svc.kiloutou.fr:8089/api/oauth/token',
    form: {
      grant_type: 'password',
      client_id: '82aaaddc-e3aa-4bb7-ad6f-ffe6a2073103',
      client_secret: '72dd96e5-333c-4a16-acf6-fd9e9de99e6a',
      username: user,
      password: pass,

    },
    // headers: {
    // //   'content-type': 'application/form-data',
    //   'content-type': 'application/x-www-form-urlencoded', // Is set automatically
    // },
    json: true, // Automatically parses the JSON string in the response
  };

  return request(optionsPOST)
    .then(res => res)
    .catch(err => err);
};


module.exports = { getToken };
