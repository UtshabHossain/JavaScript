let assosiativeArray={
    Manik:{
        Name: "Manik Khan",
        Age:15,
        Marrage:{
            status:"Unmarreid",
            Reasume:"Under Age"
        },
        Activity:"Good"
    },
    Noyon:"200",
    Utshab:"300",
    Country:{
        Name: "Bangladesh",
        Currancy:"Taka",
        Place:{
            Capital:"Dhaka",
            HomeTown:"Rajshahi",
            River:["Padma","Megna","Jomuna"],
            Seebease:{
                Main:{
                    name:"Cox-Bazer",
                    place:"Coxbazer,Chittagong,Bangladesh"
                },
                sub:"Kuawata"
            }
        }
    },
    Teacher:"Shobuj"
}

console.log(assosiativeArray["Manik"]["Marrage"]["status"])
console.log(assosiativeArray["Country"]["Place"]["Seebease"]["Main"]["place"])
console.log(assosiativeArray["Teacher"])
