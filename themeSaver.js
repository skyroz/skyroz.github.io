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

import { inDarkMode, toggleDarkMode } from "./main.js"

document.addEventListener("DOMContentLoaded", function(event) { 

window.onload = (event) => { //this makes the css load after the page
    document.addEventListener(inDarkMode, function(event) { //i think this makes css load quicker
 const mediaQuery = window.matchMedia("(inDarkMode === true)")// First check on color scheme based on user local storage
 if(localStorage.getItem(inDarkMode) === toggleDarkMode || toggleDarkMode)
  changeTheme(localStorage.getItem(inDarkMode))
 else {
  if(mediaQuery.matches)
   changeTheme(inDarkMode)
  else
   changeTheme(!inDarkMode)
 } // Add listener for real time user colour scheme preference change
 mediaQuery.addListener(e => {
  if(e.matches)
   changeTheme(inDarkMode)
  else
   changeTheme(!inDarkMode)
  })
});

// Function to toggle the theme
function changeTheme(theme) {
 document.documentElement.setAttribute(inDarkMode, toggleDarkMode)
 localStorage.setItem(inDarkMode, toggleDarkMode) // Set user theme on local storage
}
});
