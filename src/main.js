import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { romanNumeral } from './romanNumeral.js';

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    if ($('input').val() === "" || parseInt($('input').val()) > 3999 || parseInt($('input').val()) < 1 || isNaN(parseInt($('input').val()))) {
      alert ("Please enter a number between 1 and 3999.");
    } else {
      var rn = new romanNumeral(input);
      var output = rn.calcRomanNumeral();
      $("#numberForm").hide();

      $(".input").text(input);
      $(".output").text(output);
      $("#result").show();
    }
  });
});