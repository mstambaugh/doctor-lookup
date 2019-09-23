import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Doctors } from './../src/doctor-lookup.js';

$(document).ready(function() {
  $('#docSearchBtn').click(function() {
    const docName = $('#docNameInput').val();
    const illness = $('#illnessInput').val();



    let docResults = new Doctors();
    let promise1 = docResults.getDoctorsbyIllness(docName, illness);

    promise1.then(function(response) {
      const body = JSON.parse(response);
      if (body.meta.count>0) {
        body.data.forEach (function(doctor) {
          $('#doctorResults').append(`<p>Here are some recommended doctors in your area<br>${doctor.profile.first_name} ${doctor.profile.last_name}<br> ${doctor.practices[0].phones[0].number}<br>${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.city} ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}<br> ${doctor.practices[0].website}<br></p>`)
        }
      } else {
        $('#doctorResults').append(`<p> We couldn't find any doctors matching your search. Please try again with different search parameters</p>`);
      }

    });
  });
});
