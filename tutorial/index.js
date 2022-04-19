const PI = 3.14159

class Cylinder{

    constructor(name, length, width) {
        this.name = name;
        this.length = Number(length);
        this.width = Number(width);
    }

    GetVolume(){
        let out = String(PI * ((this.width / 2) ** 2) * this.length);
        console.log(typeof out);
        console.log(out);
        return out;
    }

}

let cylinders = [];

document.getElementById("makeCylinder").onclick = function(){

    let newName = document.getElementById("cylinderName").value;
    let newLength = document.getElementById("cylinderLength").value;
    let newWidth = document.getElementById("cylinderWidth").value;


    let nameValid = true;
    for (i in cylinders) {
        let cylinder = cylinders[i];

        if (cylinder.name == newName) {
            nameValid = false;
            break;
        }
    }

    if(newName == "") {
        alert("Must enter a name");
    } else if (!nameValid){
        alert("Cylinder already exists, enter new cylinder")
    } else if (newLength == "") {
        alert("Must enter a length");
    } else if (newWidth == "") {
        alert("Must enter a width");
    } else {

        let newCylinder = new Cylinder(newName, newLength, newWidth);
        cylinders.push(newCylinder);

        updateTable();
    }
}

function updateTable(){
    clearTable();

    for (let i = 0; i < cylinders.length; i++) {
    
        let cylinder = cylinders[i];
        
        // console.log(cylinders);
        // console.log(cylinder);
        // console.log(typeof i)
        // console.log(i);
    
        let row = document.getElementById("cylinderTable").insertRow(i + 1);
    
        let name = row.insertCell(0);
        let length = row.insertCell(1);
        let width = row.insertCell(2);
        let volume = row.insertCell(3);
    
        name.innerHTML = cylinder.name;
        length.innerHTML = cylinder.length;
        width.innerHTML = cylinder.width;
        volume.innerHTML = cylinder.GetVolume();
           
    }
}

function clearTable(){
    
    for (let i = cylinders.length - 1; i >= 1; i--) {
        document.getElementById("cylinderTable").deleteRow(i);
    }

}









