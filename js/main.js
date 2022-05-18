

var courseApi = ' http://localhost:3000/courses'

function start (){
    getCourses(renderCourses);
    handleCreatForm();

};

start();

function getCourses(callback){
    fetch(courseApi)
    .then(function(response){
        return response.json();
    })
    .then (callback);
};
//creat
function createCourses(data, callback){
   var options = {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
       body: JSON.stringify(data)
   }
    fetch (courseApi, options)
        .then (function(response){
            return response.json;
        })
        .then(callback)
}


//delete
function handleDeleteCourse (id){
        var options = {
            method: 'DELETE',
            headers: {
             'Content-Type': 'application/json'
             // 'Content-Type': 'application/x-www-form-urlencoded',
           }
        }
         fetch (courseApi + '/' + id, options)
             .then (function(response){
                 return response.json;
             })
             .then(function(){
                var courseItem = document.querySelector('.course-item-'+id);
                if (courseItem){
                    courseItem.remove();
                }
             })
     }

function renderCourses(courses){
    var listCoursesBlock =  document.getElementById('list-courses');
        
        var htmls = courses.map(function(course){
            return `
            <li class="course-item-${course.id}"> 
            <h1> ${course.name} </h1> 
            <h3> ${course.description} </h3>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            <button onclick="handleEditCourse(${course.id})">Sửa</button>
            </li>
            `
        });
        listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreatForm(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        if(name == '' && description == ''){
            
        }
        else createCourses(formData);
        
    }
};








