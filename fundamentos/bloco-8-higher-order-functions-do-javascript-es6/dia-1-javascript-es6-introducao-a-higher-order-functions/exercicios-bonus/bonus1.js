const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: () => {
    const min = battleMembers.mage.intelligence;
    const max = battleMembers.mage.intelligence * 2;
    let manaVle = battleMembers.mage.mana;

    if (manaVle < 15) {
      return "Não possui mana suficiente";
    }

    const dmg = Math.round(Math.random() * (max - min)) + min;
    manaVle -= 15;

    const mageObj = {
      dealtDmg: dmg,
      remainMana: manaVle,
    };

    return mageObj;
  },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => {
    const max =
      battleMembers.warrior.strength * battleMembers.warrior.weaponDmg;
    const min = battleMembers.warrior.strength;
    const dmg = Math.floor(Math.random() * (max - min)) + min;
    return dmg;
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => {
    const min = 15;
    const max = battleMembers.dragon.strength;
    const dmg = Math.floor(Math.random() * (max - min)) + min;
    return dmg;
  },
};

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (func) => {
    return (battleMembers.dragon.healthPoints -= func());
  },

  mageTurn: (func) => {
    return (battleMembers.dragon.healthPoints -= func());
  },

  dragonTurn: (func) => {
    return (
      (battleMembers.warrior.healthPoints -= func()),
      (battleMembers.mage.healthPoints -= func())
    );
  },

  turnResults: () => {
    return battleMembers;
  },
};

console.log(gameActions.turnResults());
