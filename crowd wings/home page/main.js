let data = [
	{
		username:"Samarth",
		image:"./circle.svg",
		profile_link:"#",
		date:"14 january",
		status:"Student",
		ques:"This is the from domd manipulation",
		ques_options:[
			{
				choice:"1",
				votes:4
			},
			{
				choice:"2",
				votes:100
			},
			{
				choice:"3",
				votes:9
			},
			{
				choice:"4",
				votes:4
			}
		],
		likes:5,
		comment:0
	},
	{
		username:"Vimal",
		image:"./circle.svg",
		profile_link:"#",
		date:"14 April",
		status:"Trainee",
		ques:"Which is the best programming language for machine learning",
		ques_options:[
			{
				choice:"Java",
				votes:40
			},
			{
				choice:"Python",
				votes:100
			},
			{
				choice:"Javascript",
				votes:80
			},
			{
				choice:"C/C++",
				votes:10
			},
			{
				choice:"C#",
				votes:40
			},
			{
				choice:"Other",
				votes:5
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
		choice.setAttribute("class","choice");
		choice.setAttribute("votes",data[i].ques_options[j].votes);
		// let input = document.createElement("input");
		// input.setAttribute("type","radio");
		// input.setAttribute("name",i)
		// input.setAttribute("value",data[i].ques_options[j].choice);
		// choice.appendChild(input);
		let span = document.createElement("span");
		span.innerText = data[i].ques_options[j].choice;
		choice.appendChild(span);
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

// Chaning the polling by putting event listeners on quesboxs

const quesBox = document.getElementsByClassName("ques-box");

for(let i = 0;i<quesBox.length;i++){
	let choices = quesBox[i].childNodes[2].childNodes;
	for(j = 0; j < choices.length;j++){	
		choices[j].addEventListener('click',(e) => {
			removeClass(choices);
			e.target.setAttribute("class","active");
			// e.target.setAttribute("votes",data[i].ques_options[j].votes + 1)
			// data[i].ques_options[j].votes += 1;
			changePolls(choices,e)
		})
	}
}



function removeClass(elements){
	for(let i = 0; i<elements.length;i++){
		elements[i].setAttribute("class","");
	}
}

function changePolls(elements,e){
	let totalVotes = 0;

	for(let i = 0; i<elements.length;i++){
		totalVotes += parseInt(elements[i].getAttribute("votes"));
	}
	console.log(totalVotes);

	for(let i = 0; i<elements.length;i++){
		let votes = parseInt(elements[i].getAttribute("votes"));
		let newWidth = ((votes/totalVotes) * 40).toString();
		elements[i].style.width = `${newWidth}em`
	}
}


