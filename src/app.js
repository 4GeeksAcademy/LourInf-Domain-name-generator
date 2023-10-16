/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomainList();
  });

  console.log("Hello!");
};

let generateDomain = () => {
  let pronouns = ["the", "our", "your", "my", "his"];
  let adjectives = ["great", "big", "awesome", "best", "unique", "wonderful"];
  let nouns = [
    "website",
    "company",
    "venture",
    "journey",
    "history",
    "investment",
    "startup"
  ];
  let extensions = [".com", ".net", ".edu", ".es", ".us", ".io"];

  let listOfDomainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let thedomainName =
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l];

          listOfDomainNames.push(thedomainName);
        }
      }
    }
  }
  return listOfDomainNames;
};

generateDomain();

let generateDomainList = () => {
  let domainNames = generateDomain();

  let numberedList = "<ol>";
  for (let i = 0; i < domainNames.length; i++) {
    numberedList += `<li>${domainNames[i]}</li>`;
  }
  numberedList += "</ol>";

  return numberedList;
};
