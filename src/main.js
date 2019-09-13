import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Doctors } from './../src/doctor-lookup.js';
import {  } from './../src/doctor-lookup.js';

$(document).ready(function() {
  $('#docSearchBtn').click(function() {
    const ailment = $('#ailmentInput').val();

    console.log(ailment);


    let docResults = new Doctors();
    let promise1 = docResults.getDoctorbyAilment( );

    promise1.then(function(response) {
      const body = JSON.parse(response);
      body.forEach(function(doctor){
        $('#doctorResults').append(`<p>You can see any of these  ${body[0].doctors}</p>`);
      });

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });


    // const thesWord = $('#word').val();
    // // $('#word').val("");
    // console.log(thesWord);
    //
    // let synonym = new Thesaurus();
    // let promise2 = synonym.getSynonymByWord(thesWord)
    //
    // promise2.then(function(response) {
    //   const body2 = JSON.parse(response);
    //   console.log(body2[0].meta.syns[0]);
    //     $('#result2').append(`<p>${thesWord} means ${body2[0].meta.syns[0].join(", ")}</p>`);
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // });

  });
});
