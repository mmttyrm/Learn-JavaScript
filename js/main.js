var courseApi = ' http://localhost:3000/courses'

fetch(courseApi)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        var htmls = courses.map(function(course){
            return `
            <h2> ${course.name} </h2>
            <p> ${course.descreption} </p>
            `
            // console.log(course.name);
        });
        var html = htmls.join('');
        document.getElementById('main').innerHTML = html;
    })
