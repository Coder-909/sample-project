let data = [
	{
		username:"Samarth",
		id:101,
		image:"./circle.svg",
		profile_link:"#",
		date:"14 january",
		status:"Student",
		ques:"This is the from domd manipulation",
		ques_options:[
			{
				choice:"1",
				id:0,
				votes:0
			},
			{
				choice:"2",
				id:1,
				votes:0
			},
			{
				choice:"3",
				id:2,
				votes:0
			},
			{
				choice:"4",
				id:3,
				votes:0
			}
		],
		likes:5,
		comment:0
	},
	{
		username:"Vimal",
		id:102,
		image:"./circle.svg",
		profile_link:"#",
		date:"14 April",
		status:"Trainee",
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
		],
		likes:0,
		comment:0
	}
]
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

// Chaning the polling by putting event listeners on quesboxes

const quesBox = document.getElementsByClassName("ques-box");

for(let i = 0;i<quesBox.length;i++){
	let choices = quesBox[i].childNodes[2].childNodes;
	for(j = 0; j < choices.length;j++){	
		choices[j].addEventListener('click',(e) => {
			resetcolor(choices);
			e.target.style.background = "var(--sred)";
			e.target.style.color = "white";
			let quesIndex = searchData(
				e.target.parentElement.parentElement.getAttribute("id")
			);
			let choiceIndex = (e.target.getAttribute("class")).split(" ")[1];

			data[quesIndex].ques_options[choiceIndex].votes += 1;
			changePolls(choices,quesIndex,choiceIndex);
		})
	}
}



function resetcolor(elements){
	for(let i = 0; i<elements.length;i++){
		elements[i].style.background = "white";
		elements[i].style.color = "black"
	}
}

function changePolls(elements,qi,ci){
	let totalVotes = 0;

	for(let i = 0; i<data[qi].ques_options.length;i++){
		totalVotes += parseInt(data[qi].ques_options[i].votes);
	}

	for(let i = 0; i<data[qi].ques_options.length;i++){
		let votes = parseInt(data[qi].ques_options[i].votes);
		let newWidth = ((votes/totalVotes) * 40).toString();
		elements[i].style.width = `${newWidth}em`
	}
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