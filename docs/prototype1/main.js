title = "";

description = `
`;

characters = [];

const G = {
	WIDTH: 100,
	HEIGHT: 150,

	CHOICE_LOCATION_X: 30,
	BOX_LOCATION_X: 45,
	FIRST_CHOICE_LOCATION_Y: 75 

}

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
};

let choices = [
"option1", "option2", "option3"
]

let chosen = false;

let choice = 0;
let index = 0;

const letterOptions = {
	backgroundColor: "light_blue",
	color: "black"
}

function update() {
	if (!ticks) {
		}
		text(choices[index], G.WIDTH/3.5, G.HEIGHT/2);
		text(choices[index + 1], G.WIDTH/3.5, G.HEIGHT/2 + 10);
		text(choices[index + 2], G.WIDTH/3.5, G.HEIGHT/2 + 20);
	if(choice <= 1) {
		text(choices[index], G.WIDTH/3.5, G.HEIGHT/2, {backgroundColor: "light_blue"});
	} else if(choice <= 2) {
		text(choices[index + 1], G.WIDTH/3.5, G.HEIGHT/2 + 10, {backgroundColor: "light_blue"});
	} else {
		text(choices[index + 2], G.WIDTH/3.5, G.HEIGHT/2 + 20, {backgroundColor: "light_blue"});
	}
	if(!chosen) {
	choice+= 0.5;
	if(choice > 3){
		choice = 0;
	}
}
	if(input.isJustPressed) {
		chosen = true;
	}
	if(chosen) {
		setTimeout(() => {
			choices[index] = "option4";
			choices[index + 1] = "option5";
			choices[index + 2] = "option6";
			chosen = false;
		}, 2000);
	}

}
