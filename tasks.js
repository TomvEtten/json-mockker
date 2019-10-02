let faker = require('faker');

function genTasks() {
    faker.locale = "nl";
    let tasks = [];

    for (let i = 0; i < 30; i++) {
        let today1 = new Date();
        let today2 = new Date();
        let todayplusi = new Date(today1.setHours(i));
        let todayplusi1 = new Date(today2.setHours(i + 1));
        let address = getAddress();
        let job = getJob();

        tasks.push({
            "title": job.title,
            "description": job.description,
            "circumstances": job.circumstances,
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
            "uuid": faker.random.uuid(),
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
            street: "Ferdinand Bolstraat ",
            postalCode: "1072 LC",
            houseNumber: 79
        },
        {
            place: "Utrecht",
            street: "Lange Viestraat",
            postalCode: "3511 BK",
            houseNumber: 2
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
            title: "Repareren van Attene",
            description: "De attene op deze locatie is gebroken tijdens de laatste storm, deze moet gerepareert worden. Het gaat om een model van 10 jaar geleden.",
            circumstances: "Er staat veel wind op deze hoge locatie, warm aankleden is aangeraden",
        },
        {
            title: "Aansluiten internet",
            description: "Deze klant heeft net een Ziggo pakket afgenomen, graag deze aansluiten op locatie",
            circumstances: "Klant heeft een hond die vrij aggresief is",
        },
        {
            title: "Ruis op digitale televisie",
            description: "Klant klaagt al weken lang last te hebben van ruis op de digitale zenders, dit met modem ALEX 16123",
            circumstances: "Klant is ontevreden over de verleende service van vorige keer",
        },
        {
            title: "Onderhoud kabelweg",
            description: "Checken en onderhoud uitvoeren on locatie",
            circumstances: "Dichtbij hoofdkantoor",
        },
        {
            title: "Ophalen student voor meerijdag",
            description: "een hva student de hele dag vermaken en uitleggen over dagelijkse bezigheden.",
            circumstances: "hva studenten zijn energiek",
        }
    ];
    return jobs[faker.random.number({
        'min': 0,
        'max': jobs.length - 1
    })]
}

console.log(genTasks())

module.exports = genTasks



