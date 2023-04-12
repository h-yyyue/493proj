
let curIndex = 0;


// ==============================================
// ============ Functional Code Here ============
// ==============================================
$('.face1').on({
    'click': function() {
         var src = ($(this).attr('src') === 'happyFace.png')
            ? 'select-happy.png'
            : 'happyFace.png';
         $(this).attr('src', src);
    }
  });
  $('.face2').on({
    'click': function() {
         var src = ($(this).attr('src') === 'sadFace.png')
            ? 'select-sad.png'
            : 'sadFace.png';
         $(this).attr('src', src);
    }
  });
// Main
$(document).ready( function() {
  console.log("Ready!");
   
  
  
  });



//get database:
  async function fetchData() {
    const response = await fetch('course_info.json');
    return await response.json();
  }

//show all courses
let courseData = [];

function displayListItems() {
  if(document.getElementById("courseList")){
    //$('#recommend-course').hide();
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = courseData
        .map((course, index) => `<div class="course">
        <div class="course-text">
        <a href="course_details.html" data-index="${index}" onclick="saveIndex(event)">${course.department} ${course.number}: ${course.name}</a>
        <p>“Really, it is a D(arden)P(aoletti) problem” -- XP</p>
        </div>
        <div class="faces">
        <img class="face1" src="happyFace.png" height="80px"/>
        <img class="face2" src="sadFace.png" height="80px"/>
				</div>
			  </div> `)
        .join('');
  }
  $('.face1').on({
    'click': function() {
         var src = ($(this).attr('src') === 'happyFace.png')
            ? 'select-happy.png'
            : 'happyFace.png';
         $(this).attr('src', src);
    }
  });
  $('.face2').on({
    'click': function() {
         var src = ($(this).attr('src') === 'sadFace.png')
            ? 'select-sad.png'
            : 'sadFace.png';
         $(this).attr('src', src);
    }
  });
    
}

fetchData().then(data => {
    courseData = data;
    displayListItems();
});

//show filtered courses
  function searchFunction() {
    console.log("searching");
    $('#recommend-course').hide();
    const departmentInput = document.getElementById("departmentInput");
    const numberInput = document.getElementById("numberInput");
    const departmentFilter = departmentInput.value.toUpperCase();
    const numberFilter = numberInput.value.toUpperCase();

    const filteredData = courseData.filter(course =>
        course.department.toUpperCase().includes(departmentFilter) &&
        course.number.toUpperCase().includes(numberFilter)
    );

    const courseList = document.getElementById("courseList");
    courseList.innerHTML = filteredData
        .map((course, index) =>  `<div class="course">
        <div class="course-text">
        <a href="course_details.html" data-index="${index}" onclick="saveIndex(event)">${course.department} ${course.number}: ${course.name}</a>
        <p>“Really, it is a D(arden)P(aoletti) problem” -- XP</p>
        </div>
        <div class="faces">
        <img class="face1" src="happyFace.png" height="80px"/>
        <img class="face2" src="sadFace.png" height="80px"/>
				</div>
			  </div> `)
        .join('');
        $('.face1').on({
          'click': function() {
               var src = ($(this).attr('src') === 'happyFace.png')
                  ? 'select-happy.png'
                  : 'happyFace.png';
               $(this).attr('src', src);
          }
        });
        $('.face2').on({
          'click': function() {
               var src = ($(this).attr('src') === 'sadFace.png')
                  ? 'select-sad.png'
                  : 'sadFace.png';
               $(this).attr('src', src);
          }
        });
}

//record course index
function saveIndex(event) {
  const index = event.target.getAttribute('data-index');
  localStorage.setItem('selectedCourseIndex', index);
}






//course_details page
  fetchData().then(data => {
    const selectedIndex = localStorage.getItem('selectedCourseIndex');
    console.log(selectedIndex);
    curIndex = selectedIndex;
    const selectedCourse = data[selectedIndex];
    displayCourseDetails(selectedCourse);
  });

  function displayCourseDetails(course) {
    if(document.getElementById("courseDetails")){
      const courseDetails = document.getElementById("courseDetails");
      courseDetails.innerHTML = `

      <div class="head">
        <div class="course">
         <h1><span class="course-name">${course.department} ${course.number}: ${course.name}</span></h1>
        </div>
      </div>
      <section class="description">
        <h2>Description</h2>
        <button class="ignore-button">ignore this info</button>
        <ul>
          <li id="course_description">
            ${course.description}
          </li>			
        </ul>
      </section>

      <section class="my-course-experience">
        <h2>My Course Experience</h2>
        <button class="ignore-button">ignore this info</button>
        <ul>
          <li><strong>Credits: </strong> ${course.credits}</li>
          <li><strong>Grade: </strong> ${course.grade}</li>
          <li><strong>Score: </strong> ${course.score}</li>
          <li><strong>Favorite: </strong> ${course.favorite}</li>
          <li><strong>Taken: </strong> ${course.taken}</li>
        </ul>
      </section> 
      <button class="moreinfo">More info...</button>

    `;

    // "more" buttons
    $('.button_more').click(function() {
    shown = $(this).siblings('.shownInfo');
    hidden = $(this).siblings('.hiddenInfo');
    $(this).remove();
    shown.remove();
    hidden.css("display", "inline");
   });  

    // ignore this information
    $('.ignore-button').click(function() {
    $(this).parent().hide();
    });
    // ignore recommendation panel
    $('.ignore-button-recommend').click(function() {
    $(this).parent().hide();
   });  
    // "more information" button
    $('.moreinfo').click(function() {
    $("section").show();
        
    }); 
    }
  }

  function saveClass(){
    console.log("clicked");
    course_fav[curIndex] = !course_fav[curIndex];
    console.log(course_fav);
  }

///////////////////////////////////////////


