import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Age } from './age.js';
import mercury from './img/mercury.png';
import venus from './img/venus.png';


$(document).ready(function() {
  $('#birthdate').submit(function(event) {
    event.preventDefault();
    let birthDate = $('#inputDate').val();
    let inputArr = birthDate.split('-');
    let birthYear = inputArr[0];
    let birthMonth = inputArr[1];
    let birthDay = inputArr[2];
    let userAge = new Age(birthYear, birthMonth, birthDay);
    userAge.calculateAge();

    $("#result").show();
    $("#earthYears").text(userAge.earthAge);
    $(".planets").show();
    $("#mercury").attr('src', mercury);
    $("#venus").attr('src', venus);
    
    $('#mercury').click(function() {
      let earthYears = userAge.earthAge;
      let mercuryAge = userAge.mercuryAge(earthYears);
      $('#mercuryAge').text(mercuryAge);
    });
  });

});