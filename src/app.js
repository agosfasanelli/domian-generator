/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function(pronombres,adjetivos,sustantivos,extenciones) {

//write your code here
const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extention = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extention.length; l++) {
        //console.log(pronoun[i] + adj[j] + noun[k] + extention[l]);
      }
    }
  }
}
pronoun.forEach(elementP => {
  adj.forEach(ElementA => {
    noun.forEach(elementN => {
      extention.forEach(elementE => {
        console.log(elementP + ElementA + elementN + elementE);
      });
    });
  });
});
