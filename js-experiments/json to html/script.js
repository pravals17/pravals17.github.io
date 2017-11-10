var data = [
   {
       tagName: 'div',
       className: 'test-class',
       styles: {
          width: "100px",
           height: "100px",
           backgroundColor: 'red'
       },

       children: [
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'blue'
               },
           },
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'brown',
                   float: 'right'
               },
           }
       ]
   }
];

function jsonTohtml(obj){
//get the parent div
var mainWrapper = document.getElementsByTagName('body')[0];

		for(var i=0; i<data.length;i++){
			//first div is parent
			var parent = document.createElement(data[0].tagName);
			parent.setAttribute('class',data[0].className);
	   for(style in data[0].styles){
       parent.style[style] = data[0].styles[style];
       }
	   mainWrapper.appendChild(parent);
	   var j =i;
	   var child;
	   //accessing the childrens
		   while(j<data[i].children.length){
			   child = document.createElement(data[i].children[j].tagName);
			   parent.appendChild(child);
			   var that = this;
			   child.setAttribute('class', data[i].children[j].className);
			   for(style in data[i].children[j].styles)
			   {
				   child.style[style] = data[i].children[j].styles[style];
			   }
			   
			   j++;
		   }
		};
	   
} 
	 jsonTohtml(data);