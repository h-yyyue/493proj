var shown;
var hidden;

$(document).ready(function() {
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

  $('.star').click(function() {
    var src = ($(this).css("opacity") == 0.4)
            ? 1
            : 0.4;
         $(this).css('opacity', src);
  });

});


async function fetchData() {
  const response = await fetch('course_info.json');
  return await response.json();
}

fetchData().then(data => {
  courseData = data;
  //displayListItems();
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
      <img class="face1" src="img/happyFace.png" height="80px"/>
      <img class="face2" src="img/sadFace.png" height="80px"/>
      </div>
      </div> `)
      .join('');
      $('.face1').on({
        'click': function() {
             var src = ($(this).attr('src') === 'img/happyFace.png')
                ? 'img/select-happy.png'
                : 'img/happyFace.png';
             $(this).attr('src', src);
        }
      });
      $('.face2').on({
        'click': function() {
             var src = ($(this).attr('src') === 'img/sadFace.png')
                ? 'img/select-sad.png'
                : 'img/sadFace.png';
             $(this).attr('src', src);
        }
      });
}

//record course index
function saveIndex(event) {
const index = event.target.getAttribute('data-index');
localStorage.setItem('selectedCourseIndex', index);
}