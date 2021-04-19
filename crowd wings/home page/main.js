let data = [
	{
		username:"Samarth",
		id:101,
		image:"../circle.svg",
		profile_link:"#",
		date:"14 january",
		status:"Student",
		likes:5,
		comment:0,
		voted:false,
		ques:"This is the from domd manipulation",
		ques_options:[
			{
				choice:"1",
				id:0,
				votes:3
			},
			{
				choice:"2",
				id:1,
				votes:2
			},
			{
				choice:"3",
				id:2,
				votes:4
			},
			{
				choice:"4",
				id:3,
				votes:1
			}
		]
	},
	{
		username:"Vimal",
		id:102,
		image:"../circle.svg",
		profile_link:"#",
		date:"14 April",
		status:"Trainee",
		likes:0,
		comment:0,
		voted:true,
		ques:"Which is the best programming language for machine learning",
		ques_options:[
			{
				choice:"Java",
				id:0,
				votes:10
			},
			{
				choice:"Python",
				id:1,
				votes:20
			},
			{
				choice:"Javascript",
				id:2,
				votes:12
			},
			{
				choice:"C/C++",
				id:3,
				votes:7
			},
			{
				choice:"C#",
				id:4,
				votes:7
			},
			{
				choice:"Other",
				id:5,
				votes:3
			}
		]
	}
]

// Calculating the total votes
function totalVotes(qi){
	let totalvotes = 0;

	for(let i = 0; i<data[qi].ques_options.length;i++){
		totalvotes += parseInt(data[qi].ques_options[i].votes);
	}

	return totalvotes;
}

// Creating all the ques box from data

const quesArea = document.getElementById("ques-area");

for (var i = 0; i < data.length; i++) {
	let quesBox = document.createElement("div");
	quesBox.setAttribute("class","ques-box");
	quesBox.setAttribute("id",data[i].id);

	let quesInfo = document.createElement("div")
	quesInfo.setAttribute("class","ques-info");

	let img = document.createElement("img");
	img.setAttribute("src", data[i].image);
	quesInfo.appendChild(img);

	let name = document.createElement("span");
	name.setAttribute("class","name");
	let a = document.createElement("a");
	a.setAttribute("href",data[i].profile_link);
	a.innerText = data[i].username;
	name.appendChild(a);
	quesInfo.appendChild(name);

	let date = document.createElement("span");
	date.setAttribute("class","date");
	date.innerText = data[i].date;
	quesInfo.appendChild(date);

	let br = document.createElement("br");
	quesInfo.appendChild(br);

	let status = document.createElement("span");
	status.setAttribute("class","status");
	status.innerText = data[i].status;
	quesInfo.appendChild(status);

	quesBox.appendChild(quesInfo);

	let ques = document.createElement("h1");
	ques.setAttribute("class","ques");
	ques.innerText = data[i].ques;
	quesBox.appendChild(ques);

	let total_votes = document.createElement("span");
	total_votes.setAttribute("class","totalVotes");
	let tv = totalVotes(i);
	total_votes.innerText = tv + " votes";
	quesBox.appendChild(total_votes)

	let quesOptions = document.createElement("div");
	quesOptions.setAttribute("class", "ques-options");

	for(let j = 0; j < data[i].ques_options.length;j++){
		let choice = document.createElement("label");
		choice.className = "choice " + (data[i].ques_options[j].id).toString();
		choice.setAttribute("votes",data[i].ques_options[j].votes);
		choice.innerText = data[i].ques_options[j].choice;
		quesOptions.appendChild(choice);
	}

	quesBox.appendChild(quesOptions);

	let queslc = document.createElement("div");
	queslc.setAttribute("class","ques-l-c");
	
	let thumbsUp = document.createElement("a");

	let thi = document.createElement("i");
	thi.setAttribute("class","fas fa-thumbs-up");
	thumbsUp.appendChild(thi);
	queslc.appendChild(thumbsUp);

	let comment = document.createElement("a");

	let ci = document.createElement("i");
	ci.setAttribute("class","fas fa-comments");
	comment.appendChild(ci);

	queslc.appendChild(comment);

	quesBox.appendChild(queslc);

	quesArea.appendChild(quesBox);
}



function addRandomStyle(elements){
	let colors = randomColor();
	for(let i = 0; i<elements.length;i++){
		elements[i].style.background = colors[i];
		elements[i].style.color = "black";
		elements[i].style.boxShadow = "";
		elements[i].style.border = `1px solid ${colors[i]}`;
	}
}

function selectedStyle(e){
	e.target.style.background = "var(--sred)";
	e.target.style.color = "white";
	e.target.style.boxShadow = "0px 0px 10px 4px var(--sred)";	
	e.target.style.border = "0px";
}

function searchData(id){
	let quesIndex = 0;
	for(let i = 0; i< data.length;i++){
		if(data[i].id == id){
			quesIndex = i;
		}
	}
	return quesIndex;
}

function randomColor(){
	let arr = ["#8AFF19","#00EAFF","#FFB321","#2475FF","#607D8B","#11FF21","#F84EFF"]

	var currentIndex = arr.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = arr[currentIndex];
	    arr[currentIndex] = arr[randomIndex];
	    arr[randomIndex] = temporaryValue;
	}	
  	return arr;
}

function changePolls(elements,qi){
	let total_votes = totalVotes(qi);

	for(let i = 0; i<data[qi].ques_options.length;i++){
		let votes = parseInt(data[qi].ques_options[i].votes);
		let newWidth = ((votes/total_votes) * 40).toString();
		elements[i].style.width = `${newWidth}em`
	}
}


// Chaning the polling by putting event listeners on quesboxes

const quesBox = document.getElementsByClassName("ques-box");

for(let i = 0;i<quesBox.length;i++){
	let choices = quesBox[i].childNodes[3].childNodes;

	addRandomStyle(choices);
	let quesIndex = i;
	changePolls(choices,quesIndex);
	

	for(j = 0; j < choices.length;j++){	

		choices[j].addEventListener('click',(e) => {
			addRandomStyle(choices);
			selectedStyle(e);

			let quesIndex = searchData(e.target.parentElement.parentElement.getAttribute("id"));
			let choiceIndex = (e.target.getAttribute("class")).split(" ")[1];
			data[quesIndex].ques_options[choiceIndex].votes += 1;


			let total_votes = totalVotes(i);
			console.log(quesIndex)
			let spanTotalVotes = document.getElementsByClassName("	totalVotes")[quesIndex];
			spanTotalVotes.innerText = total_votes + " votes";

			changePolls(choices,quesIndex);
		})
	}
}



function addRandomStyle(elements){
	let colors = randomColor();
	for(let i = 0; i<elements.length;i++){
		//console.log(elements)
		elements[i].style.background = colors[i];
		elements[i].style.color = "black";
		elements[i].style.boxShadow = "";
		elements[i].style.border = `1px solid ${colors[i]}`;
	}
}

function selectedStyle(e){
	e.target.style.background = "var(--sred)";
	e.target.style.color = "white";
	e.target.style.boxShadow = "0px 0px 10px 4px var(--sred)";	
	e.target.style.border = "0px";
}

function searchData(id){
	let quesIndex = 0;
	for(let i = 0; i< data.length;i++){
		if(data[i].id == id){
			quesIndex = i;
		}
	}
	return quesIndex;
}

function randomColor(){
	let arr = ["#8AFF19","#00EAFF","#FFB321","#2475FF","#607D8B","#11FF21","#F84EFF"]

	var currentIndex = arr.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = arr[currentIndex];
	    arr[currentIndex] = arr[randomIndex];
	    arr[randomIndex] = temporaryValue;
	}	
  	return arr;
}