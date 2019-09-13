export class Doctors {
getDoctorbyAilment(ailment) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.5051,-122.6750,100&limit=20&user_key=${process.env.exports.apiKey}`;
      console.log(url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

// export class Thesaurus {
// getSynonymByWord(thesWord) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${thesWord}?key=${process.env.OTHER_API_KEY}`;
//       console.log(url);
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
