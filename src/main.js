import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Doctors } from './../src/doctor-lookup.js';

$(document).ready(function() {
  $('#docSearchBtn').click(function() {
    const illness = $('#illnessInput').val();
    const docName = $('#docNameInput').val();
    console.log(docName);


    let docResults = new Doctors();
    let promise1 = docResults.getDoctorbyAilment(docName, illness);

    promise1.then(function(response) {
      const body = JSON.parse(response);
        for (let i=0; i<body.data.length; i++)
        $('#doctorResults').append(`<p>Here are some recommended doctors in your area<br>${body.data[0].profile.first_name} ${body.data[0].profile.last_name}<br> ${body.data[0].practices[0].phones[0].number}<br>${body.data[0].practices[0].visit_address.street} ${body.data[0].practices[0].visit_address.city} ${body.data[0].practices[0].visit_address.state} ${body.data[0].practices[0].visit_address.zip}<br> ${body.data[0].practices[0].website}<br></p>`);

      });


    //  function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // };


  });
});
