/** 
*Treehouse Techdegree:
*FSJS Project 2 - Data Pagination and Filtering
*Tamika Hayes, March 19, 2021
*/



/** 
*This app uses vanilla JavaScript to dynamically generate the markup for a student list
*and pagination buttons within a generic student directory. It has two primary functions,
*'showPage' and 'addPagination.' The default number of students displayed per page is 9, 
*and the sample data file contains an array of 42 student 'objects.' The app is flexible 
*enough to accept student data files of varying sizes.
*/


'use strict';

const perPage = 9;
/** 
*The `showPage` function:
*This function will create and insert/append the elements needed to display a "page" of nine students
*/
 
function showPage(list, page) {
   //startIndex and endIndex calculate the index for the first and last students to display on a page
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage);
   //studentList stores a reference to the ul element with a class of '.student-list', to which student data will be added
   const studentList = document.querySelector('.student-list');
   //remove any previously displayed students from the page
   studentList.innerHTML = '';
      //loop through every object (student) in list, and check to see if the objects fall within our start & end index boundaries
         //if condition is met, create and insert DOM elements to display the students within that index range
      for (let i = 0; i < list.length; i += 1) {
         if ( i >= startIndex && i < endIndex) {
            let studentItem = list[i];
            let html = '';
            
            html += `
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



/*
*The `addPagination` function:
*This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   //calculate and store the number of pages/pagination buttons needed
   let numberOfPages = Math.ceil(list.length / perPage);
   //linkList stores a reference to the ul element with a class of '.link-list', to which pagination buttons will be added
   const linkList = document.querySelector('.link-list');
   //remove any previously displayed pagination buttons from the page
   linkList.innerHTML = '';
      //loop through numberOfPages, beginning at page 1; create and insert the DOM elements needed to display pagination buttons
      for (let i = 1; i <= numberOfPages; i += 1) {
         let button = '';
         
         button += `
         <li>
               <button type="button">${i}</button>
            </li>
         `;
         linkList.insertAdjacentHTML('beforeend', button);
      }
   
   const buttons = document.querySelectorAll('button');  

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         for(let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList = '';
            e.target.classList.add('active');
            let pageNumber = e.target.textContent;
            showPage(list, pageNumber);
         }
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);