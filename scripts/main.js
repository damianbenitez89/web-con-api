const tableMembers = document.getElementById("table-members")
const members = data.results[0].members
const states = document.getElementById("option-states")




function drawTable(){
    tableMembers.innerHTML = ""
    let statesValue = states.value;
    const checkBoxParties = Array.from(document.querySelectorAll("input[name = partido]:checked")).map(opcion => opcion.value);
    console.log(checkBoxParties)
    members.forEach((member)=>{
        if (checkBoxParties.includes(member.party) && ((statesValue == member.state) || (statesValue == "All states"))) {
        const fullName = `${member.last_name}, ${member.first_name} ${member.middle_name || ""}`
        tableMembers.innerHTML += `
        <tr>
            <td> <a href="${member.url}"> ${fullName} </a> </td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
            <td>${member.votes_with_party_pct}%</td>
        </tr>`
        }    
    });
}

drawTable();


// const checkboxParty = document.getElementsByName("partido");
// console.log(checkboxParty)

// function optionTheParties (){
// for(let i = 0; i < checkboxParty.length; i++){
//     checkboxParty[i].addEventListener("change", function(){
//         let partidosElegidos = []
//         for (let index= 0; index<checkboxParty.length; index++){
//             if(checkboxParty[index].checked == true){
//                 partidosElegidos.push(checkboxParty[index].value)
//             }
//         }
//         const filterMembers = members.filter(function(member){
//             return partidosElegidos.indexOf(member.party) != -1 
//         }) 
//         drawTable(filterMembers)  
//         })
//     }
// }

// optionTheParties()
//------------------------------------------------------



let estadosRepetidos=members.map(miembro=>{return miembro.state})

let estados= [];
for (let index = 0; index < estadosRepetidos.length; index++) {
    if(estados.indexOf(estadosRepetidos[index])==-1){
        estados.push(estadosRepetidos[index]);
    }
}

function optionStates(estados){
    estados.forEach(state => states.innerHTML += `<option value="${state}">${state}</option>`);
}
optionStates(estados);


// states.addEventListener("change", function(){
//     const filterMembers = members.filter(function(member){
//         return member.state == states.value
//     })
//     drawTable(filterMembers)
// })

//--------------------------------------------------------------




