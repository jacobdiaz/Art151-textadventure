class Organism {
	// setting the co-ordinates, radius and the
	// speed of a particle in both the co-ordinates axes.
	constructor(col, type) {
		this.x = random(0, 950); // width
		this.y = random(0, 500); // height
		this.r = random(4, 8); // Radius
		this.xSpeed = random(-2, 2) / 2;
		this.ySpeed = random(-1, 1.5) / 2;
		this.col = col;
		this.type = type;
		this.isPressed = false;
	}
	// creation of a particle.
	createOrganism() {
		noStroke();
		fill(this.col);
		circle(this.x, this.y, this.r);
		circle(this.x + 2, this.y + 2, this.r + 8);
		circle(this.x + 2, this.y + -2.3, this.r + 2);
		circle(this.x + 3, this.y - 2, this.r + 5);
	}
	moveOrganism() {
		if (this.x < 0 || this.x > width) this.xSpeed *= -1;
		if (this.y < 0 || this.y > height) this.ySpeed *= -1;
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (mouseX == this.x && this.y == this.y) {
			onOrganism = true;
		}
	}
	joinOrganisms(species) {
		species.forEach((element) => {
			let dis = dist(this.x, this.y, element.x, element.y);
		});
	}
}
