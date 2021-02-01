import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Journal, Entry } from './journal.js';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    const title = $('#journal-title').val();
    const entry = $('#journal-entry').val();
    const journal = new Journal(title, entry);
    const words = new Entry(entry);
    const response = journal.returnEntry();
    const totalWords = words.wordCount();
    $('#response').append("<p>" + response + "</p><br>");
    $('#response').append("Total word count: " + totalWords);
  });
});