 /*Generic JavaScript Code for Elias Turner's Portfolio Website
    Copyright (C) 2024  Elias L Turner

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. 
*/

let inDarkMode = false;

const h1 = document.querySelector("h1"); // get h1 elements

h1.onclick = function toggleDarkMode(event) {

  inDarkMode = !inDarkMode; // switches between true and false
    const anchorElements = document.getElementsByTagName("a"); // get all links

    if (inDarkMode) {
    document.body.style.color = "white";
	document.body.style.backgroundColor = "black";
      document.querySelector("html").style.backgroundImage = "url('La Costa de Sunny Isles desde el océano by K.B.L Luccia.jpg')";
      for (let element of anchorElements) {
	  element.style.color = "#BF8930";
	  element.style.textShadow = "1px 1px black";
      }
        document.querySelector("main").style.background = "url('La Costa de Sunny Isles desde el océano by K.B.L Luccia.jpg') no-repeat fixed left top";
      document.querySelector("main").style.color = "#BF8930";
      document.querySelector("main").style.border = "4px solid #BF8930";
      document.querySelector("main").style.textShadow = "1px 1px #AD5315";
  }
  else {
    document.body.style.removeProperty("color");
      document.body.style.removeProperty("background");
      document.querySelector("html").style.removeProperty("background-image");
    for (let element of anchorElements) {
	element.style.removeProperty("color");
	element.style.removeProperty("text-shadow");
    }
       document.querySelector("main").style.removeProperty("background");
      document.querySelector("main").style.removeProperty("text-shadow");
      document.querySelector("main").style.removeProperty("color");
      document.querySelector("main").style.removeProperty("border");
  }

};

if (inDarkMode == true) {
	head.onclick = toggleDarkMode();
}
