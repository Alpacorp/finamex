import { Client } from "@hubspot/api-client";
import axios from "axios";

export const testApi = async () => {
  // const hubspotClient = new Client({
  //   accessToken: "pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
  // });
  // const allContacts = await hubspotClient.crm.contacts.getAll();
  // console.log("allContacts", allContacts);

  var config = {
    method: "get",
    url: "https://api.hubapi.com/cms/v3/hubdb/tables/1522/rows",
    headers: {
      Authorization: "Bearer pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
