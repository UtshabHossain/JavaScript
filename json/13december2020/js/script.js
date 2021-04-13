//JSON

//js--java script
//o--object
//n--notation

let testArray=["shams","manik","atik"];
//console.log(testArray[2]);

let ManikInfo={
    "name":"Manik",
    "Age":"16",
    "address":"Nator"
};
//console.log(ManikInfo['Age']);

let jsonDataType={
    "String":"This is string data",
    "Number":200,
    "Boolean": false,
    "Array":["shams","Amir","manik","atik"],
    "JSONData":{
        "test1":"test value",
        "test2":600,
        "JSONThree":{
            "Name": "Sobuj"
        }
    }
};

console.log(jsonDataType["JSONData"]["JSONThree"]["Name"]);
//console.log(jsonDataType.JSONData.JSONThree.Name);