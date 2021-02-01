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
    const preview = words.preview();
    const totalWords = words.wordCount();
    const vowels = words.vowels();
    const consonants = words.consonant();
    $('#response').append("<p>" + response + preview + "...</p><br>");
    $('#response').append("Total word count: " + totalWords + "<br>");
    $('#response').append("Total vowels (including Y): " + vowels + "<br>");
    $('#response').append("Total consonants (NOT including Y): " + consonants);
  });
});