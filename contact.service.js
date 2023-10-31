var contacts = [
    new Contact({
        id: 1,
        name: "Raja Damireddy",
        email: "rajadamireddy@healthonus.io",
        mobile: "1234567890",
        landline: "1234567890",
        website: "www.healthonus.com",
        address: "Healthonus pvt.limited",
    }),
    new Contact({
        id: 2,
        name: "Raheem Shaik",
        email: "raheemshaik@healthonus.io",
        mobile: "1234567890",
        landline: "1234567890",
        website: "www.healthonus.com",
        address: "Healthonus pvt.limited",
    }),
    new Contact({
        id: 3,
        name: "Venkat Kamireddy",
        email: "venkatkamireddy@healthonus.io",
        mobile: "1234567890",
        landline: "1234567890",
        website: "www.healthonus.com",
        address: "Healthonus pvt.limited",
    }),
    new Contact({
        id: 4,
        name: "Jeevan Karimindla",
        email: "jeevan.karimindla@healthonus.io",
        mobile: "1234567890",
        landline: "1234567890",
        website: "www.healthonus.com",
        address: "Healthonus pvt.limited",
    })
];

class ContactService {
    localStorageKey = "ContactService";
    constructor() {
    }

    get() {
        const _constacts = localStorage.getItem(this.localStorageKey);
        if (_constacts) {
            return JSON.parse(_constacts);
        } else {
            localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
            return contacts;
        }

    }

    getId(id) {
        const contac=contacts.find((element) => element.id ===id);
        return contac;
    }

    add(contact){
        contact.id=Math.random() * 100;
        contacts.push(contact);
        localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
        return contacts;
    }

    update(contact){
        const con=contacts.findIndex((element) => element.id ===contact.id);
        contacts.splice(con, 1, contact);
        /*contacts[contacts.map((x, i) => [i, x]).filter(x => x[1] ==con)[0][0]] = contact;*/
        localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
        return true;
    }

    delete(id){

        const cont=contacts.findIndex((element) => element.id ==id);
        contacts.splice(cont,1);
        localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
        return true;
    }
}

