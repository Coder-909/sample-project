let searchData = [
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
		ques:"When do think covid-19 cases will start declining?",
		ques_options:[
			{
				choice:"In April",
				id:0,
				votes:3
			},
			{
				choice:"In May-July",
				id:1,
				votes:5
			},
			{
				choice:"In August-October",
				id:2,
				votes:6
			},
			{
				choice:"Even later(comment)",
				id:3,
				votes:1
			}
		],
		comments:[
			{
				username:"ab123",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"12:24 AM",
				comment:"Looking at the current daily cases NOT SOON!"
			},
			{
				username:"coder",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:24 AM",
				comment:"If the variant is like before it could start declining in August-October."
			},
			{
				username:"Gamer202",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:35 AM",
				comment:"In May-July, I hope so."
			},
			{
				username:"code-007",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:40 AM",
				comment:"It is dependent on various factors so cannot be certain."
			},
			{
				username:"john404",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:50 AM",
				comment:"The new Variant is more deadly so not very soon I think."
			},
			{
				username:"anoynmous321",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"2:00 AM",
				comment:"I think in late June or July."
			}
		]
	},
	{
		username:"Samarth",
		id:102,
		image:"../circle.svg",
		profile_link:"#",
		date:"14 january",
		status:"Student",
		likes:5,
		comment:0,
		voted:false,
		ques:"When do think covid-19 cases will start declining?",
		ques_options:[
			{
				choice:"In April",
				id:0,
				votes:3
			},
			{
				choice:"In May-July",
				id:1,
				votes:5
			},
			{
				choice:"In August-October",
				id:2,
				votes:6
			},
			{
				choice:"Even later(comment)",
				id:3,
				votes:1
			}
		],
		comments:[
			{
				username:"ab123",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"12:24 AM",
				comment:"Looking at the current daily cases NOT SOON!"
			},
			{
				username:"coder",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:24 AM",
				comment:"If the variant is like before it could start declining in August-October."
			},
			{
				username:"Gamer202",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:35 AM",
				comment:"In May-July, I hope so."
			},
			{
				username:"code-007",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:40 AM",
				comment:"It is dependent on various factors so cannot be certain."
			},
			{
				username:"john404",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:50 AM",
				comment:"The new Variant is more deadly so not very soon I think."
			},
			{
				username:"anoynmous321",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"2:00 AM",
				comment:"I think in late June or July."
			}
		]
	},
	{
		username:"Samarth",
		id:103,
		image:"../circle.svg",
		profile_link:"#",
		date:"14 january",
		status:"Student",
		likes:5,
		comment:0,
		voted:false,
		ques:"When do think covid-19 cases will start declining?",
		ques_options:[
			{
				choice:"In April",
				id:0,
				votes:3
			},
			{
				choice:"In May-July",
				id:1,
				votes:5
			},
			{
				choice:"In August-October",
				id:2,
				votes:200
			},
			{
				choice:"Even later(comment)",
				id:3,
				votes:1
			}
		],
		comments:[
			{
				username:"ab123",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"12:24 AM",
				comment:"Looking at the current daily cases NOT SOON!"
			},
			{
				username:"coder",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:24 AM",
				comment:"If the variant is like before it could start declining in August-October."
			},
			{
				username:"Gamer202",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:35 AM",
				comment:"In May-July, I hope so."
			},
			{
				username:"code-007",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:40 AM",
				comment:"It is dependent on various factors so cannot be certain."
			},
			{
				username:"john404",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"1:50 AM",
				comment:"The new Variant is more deadly so not very soon I think."
			},
			{
				username:"anoynmous321",
				profileLink:"#",
				ppic: "../circle.svg",
				time:"2:00 AM",
				comment:"I think in late June or July."
			}
		]
	},

]

// Making the dropdown list of account nav
const navAccountBtn = document.getElementById("nav-account");
const accountDropdown = document.getElementsByClassName("account-dropdown")[0];
navAccountBtn.addEventListener('click',() => {
	if(accountDropdown.style.display == "block"){
		accountDropdown.style.display = "none";
	}else{
		accountDropdown.style.display = "block";
	}
})

// Calculating the total votes
function totalVotes(qi){
	let totalvotes = 0;

	for(let i = 0; i<searchData[qi].ques_options.length;i++){
		totalvotes += parseInt(searchData[qi].ques_options[i].votes);
	}

	return totalvotes;
}

const quesArea = document.getElementById("ques-area");

for (var i = 0; i < searchData.length; i++) {
	let quesBox = document.createElement("div");
	quesBox.setAttribute("class","ques-box");
	quesBox.setAttribute("id",searchData[i].id);

	let quesInfo = document.createElement("div")
	quesInfo.setAttribute("class","ques-info");

	let img = document.createElement("img");
	img.setAttribute("src", searchData[i].image);
	quesInfo.appendChild(img);

	let name = document.createElement("span");
	name.setAttribute("class","name");
	let a = document.createElement("a");
	a.setAttribute("href",searchData[i].profile_link);
	a.innerText = searchData[i].username;
	name.appendChild(a);
	quesInfo.appendChild(name);

	let date = document.createElement("span");
	date.setAttribute("class","date");
	date.innerText = searchData[i].date;
	quesInfo.appendChild(date);

	let br = document.createElement("br");
	quesInfo.appendChild(br);

	let status = document.createElement("span");
	status.setAttribute("class","status");
	status.innerText = searchData[i].status;
	quesInfo.appendChild(status);

	quesBox.appendChild(quesInfo);

	let ques = document.createElement("h1");
	ques.setAttribute("class","ques");
	ques.innerText = searchData[i].ques;
	quesBox.appendChild(ques);

	let total_votes = document.createElement("span");
	total_votes.setAttribute("class","totalVotes");
	let tv = totalVotes(i);
	total_votes.innerText = tv + " votes";
	quesBox.appendChild(total_votes)

	let quesOptions = document.createElement("div");
	quesOptions.setAttribute("class", "ques-options");

	for(let j = 0; j < searchData[i].ques_options.length;j++){
		let choice = document.createElement("label");
		choice.className = "choice " + (searchData[i].ques_options[j].id).toString();
		choice.setAttribute("votes",searchData[i].ques_options[j].votes);
		choice.innerText = searchData[i].ques_options[j].choice;
		quesOptions.appendChild(choice);
	}

	quesBox.appendChild(quesOptions);

	let queslc = document.createElement("div");
	queslc.setAttribute("class","ques-l-c");
	
	let thumbsUp = document.createElement("a");
	thumbsUp.className = "like-btn";

	let thi = document.createElement("i");
	thi.className = "fas fa-thumbs-up like-btn-symbol";
	thumbsUp.appendChild(thi);

	let thSpan = document.createElement("span");
	thSpan.setAttribute("class","likes");
	thSpan.innerText = `${searchData[i].likes} likes`;
	thumbsUp.appendChild(thSpan);

	queslc.appendChild(thumbsUp);

	let comment = document.createElement("a");
	comment.className = "open-comment-section";

	let ci = document.createElement("i");
	ci.setAttribute("class","fas fa-comments");
	comment.appendChild(ci);

	queslc.appendChild(comment);

	quesBox.appendChild(queslc);

	let commentSection = document.createElement("div");
	commentSection.className = "comment-section";

	let createComment = document.createElement("form");
	createComment.className = "create-comment";

	let commentInput = document.createElement("input");
	commentInput.setAttribute("type","text");
	commentInput.setAttribute("name","comment");
	createComment.appendChild(commentInput);

	let createCommentButton = document.createElement("button");
	createCommentButton.setAttribute("type","submit");
	createCommentButton.innerText = `Comment`;
	createComment.appendChild(createCommentButton);

	commentSection.appendChild(createComment);

	let comments = document.createElement("div");
	comments.className = "comments";

	for(let j = 0; j < searchData[i].comments.length;j++){
		let hr = document.createElement("hr");
		comments.appendChild(hr);

		let comment = document.createElement("div");
		comment.className = "comment";

		let commentInfo = document.createElement("div");
		commentInfo.className = "comment-info";

		let profileImg = document.createElement("img");
		profileImg.setAttribute("src",searchData[i].comments[j].ppic);
		commentInfo.appendChild(profileImg);

		let username = document.createElement("p");
		username.className = "username";
		username.innerText = searchData[i].comments[j].username;
		commentInfo.appendChild(username);

		let time = document.createElement("p");
		time.className = "time";
		time.innerText = searchData[i].comments[j].time;
		commentInfo.appendChild(time);

		comment.appendChild(commentInfo);

		let commentText = document.createElement("p");
		commentText.className = "comment-text";
		commentText.innerText = searchData[i].comments[j].comment;

		comment.appendChild(commentText);

		comments.appendChild(comment);
	}

	commentSection.appendChild(comments);

	quesBox.appendChild(commentSection);
	quesArea.appendChild(quesBox);
}

// Chaning the polling by putting event listeners on quesboxes
const quesBox = document.getElementsByClassName("ques-box");

for (let i = 0; i < quesBox.length; i++){
	quesBox[i].addEventListener('click', () => {
		let quesOptions = document.getElementsByClassName("ques-options")[i];
		quesOptions.style.display = "grid";
	})
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

function searchDatabase(id){
	let quesIndex = 0;
	for(let i = 0; i< searchData.length;i++){
		if(searchData[i].id == id){
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

	for(let i = 0; i<searchData[qi].ques_options.length;i++){
		let votes = parseInt(searchData[qi].ques_options[i].votes);
		let newWidth = ((votes/total_votes) * 40).toString();
		elements[i].style.width = `${newWidth}em`
	}
}

for(let i = 0;i<quesBox.length;i++){
	let choices = quesBox[i].childNodes[3].childNodes;

	addRandomStyle(choices);
	let quesIndex = i;
	changePolls(choices,quesIndex);

	//Adding event listenerser on like button	
	let like_btn = document.getElementsByClassName("like-btn")[i];
	let likes = document.getElementsByClassName("likes")[i];
	let like_btn_symbol = document.getElementsByClassName("like-btn-symbol")[i];
	like_btn.addEventListener('click', () => {
		if(likes.style.color == `var(--sred)`){
			searchData[i].likes -= 1;
			likes.innerText = `${searchData[i].likes} likes`;
			likes.style.color = `grey`;
			like_btn_symbol.style.color = `grey`;
		}else{
			searchData[i].likes += 1;
			likes.innerText = `${searchData[i].likes} likes`;
			likes.style.color = `var(--sred)`;
			like_btn_symbol.style.color = `var(--sred)`;
		}
	})

	// Adding event listener on comment button
	let openCommentSection = document.getElementsByClassName("open-comment-section")[i];
	let commentSection = document.getElementsByClassName("comment-section")[i];
	openCommentSection.addEventListener('click', () => {
		if(	commentSection.style.display === "block"){
			commentSection.style.height = '0%';
			commentSection.style.display = "none";
		}else{
			commentSection.style.height = 'auto';
			commentSection.style.display = "block";
		}
	})

	for(j = 0; j < choices.length;j++){	
		choices[j].addEventListener('click',(e) => {
			addRandomStyle(choices);
			selectedStyle(e);

			let quesIndex = searchDatabase(e.target.parentElement.parentElement.getAttribute("id"));
			let choiceIndex = (e.target.getAttribute("class")).split(" ")[1];
			searchData[quesIndex].ques_options[choiceIndex].votes += 1;


			let total_votes = totalVotes(i);
			console.log(quesIndex)
			let spanTotalVotes = document.getElementsByClassName("totalVotes")[quesIndex];
			spanTotalVotes.innerText = total_votes + " votes";

			changePolls(choices,quesIndex);
		})
	}
}
