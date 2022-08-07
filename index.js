const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const all = await contacts.listContacts();
      console.log(all);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "5" });
// // invokeAction({
//   action: "add",

//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });

// invokeAction({ action: "remove", id: "3" });
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
