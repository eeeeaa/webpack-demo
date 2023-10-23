import _ from 'lodash';
import myName from './myName';
import './css/style.css'; //import resources so webpack can see it
import Icon from './assets/img/icon.jpg';
import Data from './assets/data/data.xml';
import Notes from './assets/data/data.csv';
import toml from './assets/data/data.toml';
import yaml from './assets/data/data.yaml';
import json from './assets/data/data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');

    // Lodash is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ') + ',' + myName('Cody');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());