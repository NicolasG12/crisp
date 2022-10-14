title = "";

description = `
`;

characters = [
`
  ll
 llll
llllll
`,`
  l
  l
  l
  l
  l
  l `
];

const G = {
	WIDTH: 100,
	HEIGHT: 150,

	// CHOICE_LOCATION_X: 30,
	// BOX_LOCATION_X: 45,
	// FIRST_CHOICE_LOCATION_Y: 75,

	ROCK_X: 10,
	ROCK_Y: 125

}

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
};

let choices = [
"option1", "option2", "option3"
]

// /**
//  * @typedef {{
//  * pos: Vector,
//  * speed: Number
//  * }} Rock
//  */

// /**
//  * @type { Rock []}
//  */
let rocks;
let chosen = false;

let choice = 0;
let index = 0;

let dif = 0.5;
let slope = 0;

let collidingWithPlayer;


const letterOptions = {
	backgroundColor: "light_blue",
	color: "black"
}


function update() {
	if (!ticks) {
		rocks = [];
		for(let i = 0; i < 10; i++) {
			const posX = rnd(G.ROCK_X + 10 , G.WIDTH);
			const posY = rnd(G.ROCK_Y - 10, G.HEIGHT);
			console.log(posX, posY);

			rocks.push({
				x: posX,
				y: posY,
				speed: rnd(-1.0, 1.0)
			});

		}
		console.log(rocks);
		}

	// rocks.forEach((r) => {

	// 	r.y += r.speed;
	// 	r.y %= G.HEIGHT;

	// 	color("light_black");
	// 	char("a", r.x, r.y);
	// });
	remove(rocks, (r) => {
		char("a", r.x, r.y);
		r.y += r.speed;
		r.y %- G.HEIGHT;
		color("light_black");
		if(chosen) {
			collidingWithPlayer = line(G.ROCK_X + 4, G.ROCK_Y, G.ROCK_X + 100, 
				G.ROCK_Y - (choice * 5) , 2);
				console.log(collidingWithPlayer.isColliding.char.a);
			}
	})
	char("a", G.ROCK_X, G.ROCK_Y);
	if(!chosen) {
		line(G.ROCK_X + 4, G.ROCK_Y, G.ROCK_X + 20, G.ROCK_Y - choice, 2);
		if(choice > 30) {
			dif = -0.5;
		} else if(choice < 0) {
			dif = 0.5;
		}
		choice += dif;
	}
	if(input.isJustPressed) {
		chosen = true;
		setTimeout(() => {
			chosen = false;
		}, 1000);
	}


}
