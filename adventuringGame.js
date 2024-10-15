const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: {
    name: "Leo",
    type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
    }
},  
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}
};

adventurer.roll();

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
};

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.companion.roll();

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
}

class Companion extends Character {
    constructor(name,type) {
        super(name);
        this.type = type;
    }
}

const adventurerRobin = new Adventurer("Robin","Fighter");


class CharacterStatic {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = CharacterStatic.MAX_HEALTH;
        this.inventory = [];
    }
}
class AdventurerStatic extends CharacterStatic {
    static ROLES = ["Fighter","Healer","Wizard"];
    constructor(name) {
        this.name = name;
        this.role = role;
        this.inventory = [];
    }
}
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new AdventurerStatic(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
const healers = new AdventurerFactory("Healer");
const robin1 = healers.generate("Robin");
console.log(robin1);
