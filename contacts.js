const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("./db", "contacts.json");

const updateContacts = async (contacts) => {
  const data = await fs.writeFile(
    contactsPath,
    JSON.stringify(contacts, null, 2)
  );
  console.log(data);
};

updateContacts();
