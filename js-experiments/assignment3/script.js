info = {
 firstname : 'Praval',
 lastname : 'Sharma',
 gender : 'Male',
 education : 'Computer Science',

 projects : [
   {projectname : 'Predictive Models for House Price Estimation', Language : 'python'},
   {projectname : 'PS Music Manager', Language : 'VB.NET'},
 ],
};

bodydiv = document.getElementsByTagName('body')[0];

divname= document.createElement('div');
divname.style.textAlign = 'left';
divname.innerHTML = info.firstname + ' ' + info.lastname;
bodydiv.appendChild(divname);

gender = document.createElement('div');
gender.style.textAlign = 'left';
gender.innerHTML = info.gender;
bodydiv.appendChild(gender);

education = document.createElement('div');
education.style.textAlign = 'left';
education.innerHTML = info.education;
bodydiv.appendChild(education);


projectsdiv = document.createElement('div');
projectsdiv.innerHTML = 'PROJECTS';


projul = document.createElement('ul');

projectsdiv.appendChild(projul);

for (var i=0; i<info.projects.length; i++){
 listitem = document.createElement('li');
 listitem.style.padingLeft = '10px';
 listitem.innerHTML = info.projects[i].projectname + ' : ' + info.projects[i].Language;
 projul.appendChild(listitem);

}

bodydiv.appendChild(projectsdiv);