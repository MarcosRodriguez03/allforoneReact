//Page 2
const call = async (name) => {
    const promise = await fetch('https://allforonehosting.azurewebsites.net/controller/SayHell/' + name);
    const data = await promise.text();
    return data;
}
//Page 3

const call3 = async (number1, number2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Add2Numbers/Adding2Num/${number1}/${number2}`);
    const data = await promise.text();
    return data;
}

//Page 4

const call4 = async (number1, number2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Ask2Questions/Ask2Questions/${number1}/${number2}`);
    const data = await promise.text();
    return data;
}

//Page 5
const call5 = async (number1, number2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${number1}/${number2}`);
    const data = await promise.text();
    return data;
}


//Page 6

const call6 = async (gender, name, age, color, pronoun, food, job, adjective1, adjective2, noun) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/MadLib/MadLib/${gender}/${name}/${age}/${color}/${pronoun}/${food}/${job}/${adjective1}/${adjective2}/${noun}`);
    const data = await promise.text();
    return data;
}

//Page 7

const call7 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${name}`);
    const data = await promise.text();


    return data;

}

//Page 8

const call8 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItNumbersOnly/ReverseItNumbersOnly/${name}`);
    const data = await promise.text();


    return data;

}

//Page 9

const call9 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${name}`);
    const data = await promise.text();


    return data;

}

//Page 10

const call10 = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();


    return data;

}

//Page 11


const call11 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/OddOrEven/OddOrEven/${name}`);
    const data = await promise.text();


    return data;

}



export {
    call,
    call3,
    call4,
    call5,
    call6,
    call7,
    call8,
    call9,
    call10,
    call11
}