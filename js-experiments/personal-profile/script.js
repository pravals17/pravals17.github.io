data = {
  firstname : 'Praval',
  lastname : 'Sharma',
  gender : 'Male',
  education : 'Computer Science',
  projects : [
    {projectname : 'Predictive Models for House Price Estimation', Language: 'python'},
    {projectname : 'Music Store Manager', Language : 'VB.NET'},],
  hobbies : [
    'sports','music', 'travelling']};


var mainWrapper = document.getElementById('main-wrapper');

var divname = document.createElement("div");
divname.innerHTML = data.firstname + ' ' + data.lastname;
divname.style.textAlign ='left';
mainWrapper.appendChild(divname);


var gender = document.createElement('div');
gender.style.textAlign = 'left';
gender.innerHTML = data.gender;
mainWrapper.appendChild(gender);

var education = document.createElement('div');
education.style.textAlign = 'left';
education.innerHTML = data.education;
mainWrapper.appendChild(education);

var projectdiv = document.createElement('div');
projectdiv.innerHTML = 'PROJECTS';
mainWrapper.appendChild(projectdiv);

var projectul = document.createElement('ul');
projectdiv.appendChild(projectul);
for (var i=0; i<data.projects.length; i++){
  var listitem = document.createElement('li');
  listitem.style.marginLeft = '10px';
  listitem.innerHTML = data.projects[i].projectname + ' : ' + data.projects[i].language;
  projectul.appendChild(listitem);
}
var hobbies = document.createElement('div');
hobbies.style.textAlign = 'left';
hobbies.innerHTML = 'Hobbies';
mainWrapper.appendChild(hobbies);

var hobbyul = document.createElement('ul');
hobbies.appendChild(hobbyul);
for (var i=0; i<data.hobbies.length; i++){
  var listitem = document.createElement('li');
  listitem.style.marginLeft = '10px';
  listitem.innerHTML = data.hobbies[i];
  hobbyul.appendChild(listitem);
}