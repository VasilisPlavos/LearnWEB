var jsonObj = {
    "userData": {
        "companies":["Otis", "BCNA"],
        "contacts":[
            {
                "name": "Vasilis Plavos",
                "phone": "+306971234567",
                "company": "BCNA"
            },
            {
                "name": "Popi Dima",
                "phone": "+302101234567",
                "company": "Otis"
            }
        ]
    }
};

function findCompanies(){
    uniqueCompanies = [];
    companiesList = [];
    companiesTags = [];

    for (i = 0; i < jsonObj.userData.contacts.length; i++){
        company = jsonObj.userData.contacts[i].company;
        companiesList.push(company);
        if (!uniqueCompanies.includes(company)){
            uniqueCompanies.push(company);
        }
    }

    for (i = 0; i < uniqueCompanies.length; i++){
        count = companiesList.filter(x => x == uniqueCompanies[i]).length;
        uniqueCompany = uniqueCompanies[i] + " (" + count + ")"
        companiesTags.push(uniqueCompany)
    }

    console.log(companiesTags)


};

findCompanies();