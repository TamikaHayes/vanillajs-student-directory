/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


'use strict';

const perPage = 9;
const studentList = document.querySelector('.student-list');
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage);
   //const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
      for (let i = 0; i < list.length; i += 1) {
         if ( i >= startIndex && i < endIndex) {
            let studentItem = list[i];
            
            const html = `
               <li class="student-item cf">
               <div class="student-details">
               <img class="avatar" src="${studentItem.picture.large}" alt="Profile Picture">
               <h3>${studentItem.name.first} ${studentItem.name.last}</h3>
               <span class="email">${studentItem.email}</span>
               </div>
               <div class="joined-details">
               <span class="date">${studentItem.registered.date}</span>
               </div>
            </li>
            `;
            studentList.insertAdjacentHTML('beforeend', html);
      }    
    }
}

showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   let numberOfButtons = Math.ceil(list.length / perPage);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 0; i < numberOfButtons; i += 1) {
      let button = numberOfButtons[i];
      
      const buttonHTML = `
      <li>
            <button type="button">${i}</button>
          </li>
      `;
      linkList.insertAdjacentHTML('beforeend', buttonHTML);
   }
}

// Call functions
addPagination(data);