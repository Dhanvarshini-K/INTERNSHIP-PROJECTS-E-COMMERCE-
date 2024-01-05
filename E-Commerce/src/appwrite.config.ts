import { Client, Databases,ID} from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659681cecf0db22a1c3e');

export const databases = new Databases(client);

export const promise = databases.createDocument(
    '659681feb0c97e65e766',
    '659682143c072a8dee7f',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
