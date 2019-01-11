import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Age } from './age.js';
import mercury from './img/mercury.png';
import venus from './img/venus.png';
import earth from './img/earth.png';
import mars from './img/mars.png';
import jupiter from './img/jupiter.png';
import pluto from './img/pluto.png';


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
    $("#earth").attr('src', earth);
    $("#mars").attr('src', mars);
    $("#jupiter").attr('src', jupiter);
    $("#pluto").attr('src', pluto);
    
    $('#mercury').click(function() {
      let earthYears = userAge.earthAge;
      let mercuryAge = (userAge.mercuryAge(earthYears)).toFixed(1);
      $('#mercuryAge').show();
      $('#mercuryResult').text(mercuryAge);
    });
    $('#venus').click(function() {
      let earthYears = userAge.earthAge;
      let venusAge = (userAge.venusAge(earthYears)).toFixed(1);
      $('#venusAge').show();
      $('#venusResult').text(venusAge);
    });
    $('#earth').click(function() {
      let earthAge = userAge.earthAge;
      $('#earthAge').show();
      $('#earthResult').text(earthAge);
    });
    $('#mars').click(function() {
      let earthYears = userAge.earthAge;
      let marsAge = (userAge.marsAge(earthYears)).toFixed(1);
      $('#marsAge').show();
      $('#marsResult').text(marsAge);
    });
    $('#jupiter').click(function() {
      let earthYears = userAge.earthAge;
      let jupiterAge = (userAge.jupiterAge(earthYears)).toFixed(1);
      $('#jupiterAge').show();
      $('#jupiterResult').text(jupiterAge);
    });
    $('#pluto').click(function() {
      let earthYears = userAge.earthAge;
      let plutoAge = (userAge.plutoAge(earthYears)).toFixed(1);
      $('#plutoAge').show();
      $('#plutoResult').text(plutoAge);
    });

  });

});