let faker = require('faker');

function genereteTaks() {
    faker.locale = "nl";
    let tasks = [];

    for (let i = 0; i < 30; i++) {
        let today = new Date();
        let todayplusi = today.setHours(today.getHours() + i)
        let todayplusi1 = today.setHours(today.getHours() + 1 + i)

        tasks.push({
            "title": faker.lorem.sentence(),
            "description": faker.lorem.paragraph(),
            "circumstances": faker.lorem.sentence(),
            "contact_person": faker.name.firstName() + " " + faker.name.lastName(),
            "contact_phone_number": faker.phone.phoneNumber('06#########'),
            "start_time": todayplusi.toString(),
            "end_time": todayplusi1.toString(),
            "place": faker.address.city(),
            "street": faker.address.streetName(),
            "postal_code": faker.address.zipCode("####-##"),
            "house_number": faker.random.number({
                'min': 2,
                'max': 50
            }),
            "country": "Netherlands",
            "engineer_id": faker.random.number({
                'min': 2,
                'max': 50
            }),
            "uuid": faker.random.uuid(),
            "last_updated": today.toString(),
            "notes": ""
        });
    }
    return {"tasks": tasks}
}

module.exports = genereteTaks


