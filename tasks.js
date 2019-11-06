let faker = require('faker');

function genTasks() {
    faker.locale = "nl";
    let tasks = [];

    for (let i = 0; i < 90; i++) {
        let today1 = new Date();
        let today2 = new Date();
        let todayplusi = new Date(today1.setHours(i));
        let todayplusi1 = new Date(today2.setHours(i + 1));
        let address = getAddress();
        let job = getJob();

        tasks.push({
            "id": faker.random.uuid(),
            "title": job.title,
            "description": job.description,
            "circumstances": job.circumstances,
            "status": faker.random.boolean(),
            "contact_person": faker.name.firstName() + " " + faker.name.lastName(),
            "contact_phone_number": faker.phone.phoneNumber('06#########'),
            "start_time": todayplusi,
            "end_time": todayplusi1,
            "place": address.place,
            "street": address.street,
            "postal_code": address.postalCode,
            "house_number": address.houseNumber,
            "country": "Netherlands",
            "engineer_id": faker.random.number({
                'min': 2,
                'max': 10
            }),
            "last_updated": today1,
            "notes": ""
        });
    }
    return {"tasks": tasks}
}

function getAddress() {
    let adresses = [
        {
            place: "Amsterdam",
            street: "Kabelweg",
            postalCode: "1044 BB",
            houseNumber: 12
        },
        {
            place: "Amsterdam",
            street: "Ferdinand Bolstraat",
            postalCode: "1072 LC",
            houseNumber: 79
        },
        {
            place: "Amsterdam",
            street: "De Passage",
            postalCode: "1101 AX",
            houseNumber: 100
        },
        {
            place: "Hoofddorp",
            street: "Polderplein",
            postalCode: "2132 BA",
            houseNumber: 4
        },
        {
            place: "Amsterdam",
            street: "Bijlmerplein",
            postalCode: "1102 DB",
            houseNumber: 129
        },
    ];
    return adresses[faker.random.number({
        'min': 0,
        'max': adresses.length - 1
    })]
}

function getJob() {
    let jobs = [
        {
            title: "Repareren van Antenne",
            description: "De antenne op deze locatie is gebroken tijdens de laatste storm, deze moet gerepareerd worden. Het gaat om een model van 10 jaar geleden.",
            circumstances: "Er staat veel wind op deze hoge locatie, warm aankleden is aangeraden",
        },
        {
            title: "Aansluiten internet",
            description: "Deze klant heeft net een Ziggo pakket afgenomen, graag deze aansluiten op locatie",
            circumstances: "Klant heeft een hond loslopen in de tuin, graag bellen vooraf",
        },
        {
            title: "Ruis op digitale televisie",
            description: "Klant geeft al weken aan lang last te hebben van ruis/korrelig beeld op de digitale zenders, dit met modem ALEX 12345",
            circumstances: "Klant is ontevreden over de verleende service van vorige keer, de vorige montuer heeft dit probleem niet op kunnen lossen",
        },
        {
            title: "Onderhoud kabelweg",
            description: "Checken en onderhoud uitvoeren op locatie",
            circumstances: "Dichtbij hoofdkantoor",
        },
        {
            title: "Ophalen student voor meerijdag",
            description: "een HVA student uitleggen over dagelijkse bezigheden.",
            circumstances: "HVA studenten zijn over het algemeen vrij energiek",
        },
        {
            title: "MKB storing in intern netwerk",
            description: "MKD Sons Of Ziggo hebben een storing in het interne netwerk, klant heeft MKB pakket en dus prio",
            circumstances: "Graag de storing oplossen ook al gaan we over de standaard werktijd heen",
        }
    ];
    return jobs[faker.random.number({
        'min': 0,
        'max': jobs.length - 1
    })]
}

console.log(genTasks())

module.exports = genTasks



