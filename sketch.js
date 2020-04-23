let screen = 1;
let population = 10;
let organism1 = [];
let organism2 = [];
let allOrganisms = [];
let bg;
let showken = false;
let showbeetle = false;

function preload() {
	apercu = loadFont('fonts/apercu_bold_pro.otf');
	gif_loadImg = loadImage('beetleJuice.gif');
	gif_loadImg = loadImage('ken.gif');
	cvd = loadImage('cvd.png');
	carole = loadImage('carole.jpeg');
	jail = loadImage('jail.jpg');
	germ = loadImage('germ.jpeg');
	dr = loadImage('dr.jpg');
}
function mousePressed() {
	if (screen == 1) {
		badOrgButton.checkIfClicked();
		goodOrgButton.checkIfClicked();
	} else if (screen == 2) {
		screen = 4;
	} else if (screen == 3) {
		clear();
		screen = 5;
	} else if (screen == 4) {
		clear();
		screen = 6;
	} else if (screen == 5) {
		clear();
		screen = 7;
	} else if (screen == 7) {
		beetleJuiceButton.checkIfClicked();
		kenYeongButton.checkIfClicked();
	} else if (screen == 8) {
		choseBadButton.checkIfClicked();
		choseGoodButton.checkIfClicked();
	} else if (screen == 10) {
		restartButton.checkIfClicked();
	} else if (screen == 12) {
		resetButton.checkIfClicked();
		goBadButton.checkIfClicked();
	} else if (screen == 9) {
		location.reload();
	} else if (screen == 11) {
		location.reload();
	}
}
function setup() {
	populateOrganisms();
	createCanvas(950, 500);
	// Load Bg for screen 2
	if (screen == 2) {
		bg = loadImage('cvd.png');
	}
}
//Draw Screens
function draw() {
	if (showken == true) {
		createImg('ken.gif', 'ken').position(20, 120);
	}
	if (screen == 1) {
		screen1();
	} else if (screen == 2) {
		screen2();
	} else if (screen == 3) {
		screen3();
	} else if (screen == 4) {
		screen4();
	} else if (screen == 5) {
		screen5();
	} else if (screen == 6) {
		screen6();
	} else if (screen == 7) {
		screen7();
	} else if (screen == 8) {
		screen8();
	} else if (screen == 9) {
		screen9();
	} else if (screen == 10) {
		screen10();
	} else if (screen == 11) {
		showken = true;
		screen11();
	} else if (screen == 12) {
		screen12();
	} else if (screen == 13) {
		screen13();
	}
}
class orgButton {
	constructor(type, startX, nextScreen, color) {
		this.y = 300;
		this.type = type;
		this.startX = startX;
		this.color = color;
		this.nextScreen = nextScreen;
	}
	createButton() {
		fill(300);
		rect(this.startX, this.y, 100, 55, 8, 8, 8, 8);
		textSize(12);
		fill(this.color);
		// Print out the direction
		text(this.type, this.startX + 50, this.y + 30);
	}
	// Check if mouse click is within x and y of button
	checkIfClicked() {
		if (mouseX > this.startX && mouseX < this.startX + 100 && mouseY > this.y && mouseY < this.y + 55) {
			console.log('Clicked');
			screen = this.nextScreen;
		}
	}
}
// Start Screen
function screen1() {
	background('#800000');
	textFont(apercu);
	// Header Text
	printCenterText('Friend or Foe?', 'Who are you?... Click on the organism that looks most like yourself.');
	// Create buttons
	badOrgButton = new orgButton('Organism 1', 350, 2, 'rgb(89,0,0)'); // Bad routes are even
	goodOrgButton = new orgButton('Organism 2', 500, 3, 'rgb(220,20,60)'); // Good routes are odd
	badOrgButton.createButton();
	goodOrgButton.createButton();

	// Move the orgs around
	for (let i = 0; i < allOrganisms.length; i++) {
		allOrganisms[i].createOrganism();
		allOrganisms[i].moveOrganism();
		allOrganisms[i].joinOrganisms(allOrganisms.slice(i));
	}
}

// Bad Organism Route
function screen2() {
	background('rgb(89,0,0)');
	image(cvd, 0, 0);
	printCenterText('You sure look\nalot like Corona Virus', '');
}
function screen4() {
	background(0);
	image(cvd, 0, 0);
	printCenterText('You really need to knock it off', '');
	// Move the orgs around
	for (let i = 0; i < allOrganisms.length; i++) {
		allOrganisms[i].createOrganism();
		allOrganisms[i].moveOrganism();
		allOrganisms[i].joinOrganisms(allOrganisms.slice(i));
	}
}
function screen6() {
	background(0);
	image(cvd, 0, 0);
	printCenterText('', 'somethings happening...');
	for (let i = 0; i < allOrganisms.length; i++) {
		allOrganisms[i].createOrganism();
		allOrganisms[i].moveOrganism();
		allOrganisms[i].joinOrganisms(allOrganisms.slice(i));
	}
	for (let i = 0; i < 20; i++) {
		if (allOrganisms[i].r > 600) {
			console.log('GREATER');
			screen = 8;
		}
		allOrganisms[i].r *= 1.01;
	}
}
function screen8() {
	clear();
	background('rgb(89,0,0)');
	printCenterText('Looks like you mutated.', 'Are you gunna be good now?');
	choseBadButton = new orgButton('No', 350, 10, 'rgb(89,0,0)');
	choseGoodButton = new orgButton('Yes', 500, 12, 'rgb(220,20,60)');
	choseBadButton.createButton();
	choseGoodButton.createButton();
}
function screen10() {
	// Set all circles back to og radius state
	for (let i = 0; i < 20; i++) {
		allOrganisms[i].r = random(4, 8);
	}

	background(30);
	image(jail, 0, 0);

	printCenterText('You were sent to guantanamo bay\nto rot.', '');
	restartButton = new orgButton('Restart', 430, 1, 'rgb(89,0,0)');
	restartButton.createButton();
}
function screen12() {
	background(30);
	image(carole, 350, 0, 300, 200);
	printCenterText('You discovered the truth...', ' Carole Baskin killed her husband.');
	goBadButton = new orgButton('Go Bad', 350, 10, 'rgb(89,0,0)');
	resetButton = new orgButton('Restart', 500, 1, 'rgb(89,0,0)');

	goBadButton.createButton();
	resetButton.createButton();
}

// Good Organism Route
function screen3() {
	background(0);
	image(germ, 0, 0);

	printCenterText('Wow your a good look bacteria...');
	// Insert picture of backter good looking
}
function screen5() {
	background(100);
	image(dr, 370, 300, 200, 150);
	printCenterText(
		'Just did some tests on you and...',
		'Your the cure to aging!\nWho ever is your host will live forever!'
	);
}
function screen7() {
	background(50);
	printCenterText('Now for the hard part.', 'Who shall be your next host?');
	beetleJuiceButton = new orgButton('Beetle Juice', 350, 9, 'rgb(89,0,0)'); // Bad routes are even
	kenYeongButton = new orgButton('Ken Yeong', 500, 11, 'rgb(220,20,60)'); // Good routes are odd
	beetleJuiceButton.createButton();
	kenYeongButton.createButton();
}
function screen9() {
	// Beetle Juice
	background(0);
	showbeetle = true;
	if (showbeetle == true) {
		createImg('beetleJuice.gif').position(50, 150);
	}
	fill(500);
	textSize(48);
	textAlign(CENTER);

	text('Beetle Juice \nis elected president', 620, 200);
}
function screen11() {
	//Ken Yeong
	background(100);
	showken = true;
	fill(500);
	textSize(48);
	textAlign(CENTER);

	text('Mr. Chow is happy\nto see you', 720, 100);
	textSize(22);

	text('Shortly, Mr. Chow is arrested and\n gets life in prison', 720, 200);
}
function screen13() {
	background(10);
}

function populateOrganisms() {
	for (let j = 0; j < population; j++) {
		organism2.push(new Organism('rgb(89,0,0)', 'good'));
	}
	for (let i = 0; i < population; i++) {
		organism1.push(new Organism('rgb(220,20,60)', 'bad'));
	}
	allOrganisms = organism1.concat(organism2);
}
function printCenterText(header, subheader) {
	textAlign(CENTER);
	fill(500);
	textSize(52);
	text(header, 480, 200);
	textSize(16);
	text(subheader, 480, 250);
}
