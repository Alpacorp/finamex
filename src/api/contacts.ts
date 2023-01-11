import axios from "axios";

import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({
  accessToken: "pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
});

export const testApi = async () => {
  // const hubspotClient = new Client({
  //   accessToken: "pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
  // });
  // const allContacts = await hubspotClient.crm.contacts.getAll();
  // console.log("allContacts", allContacts);
  // var config = {
  //   method: "get",
  //   url: "https://api.hubapi.com/cms/v3/hubdb/tables/1522/rows",
  //   headers: {
  //     Authorization: "Bearer pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
  //   },
  // };
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

export const postApi = async () => {
  // const properties = {
  //   email: "alpa@gmail.com",
  //   firstname: "Alejo",
  //   lastname: "Pala",
  //   phone: "(555) 555-5555",
  //   company: "Alpacorp",
  //   website: "hubspot.com",
  //   lifecyclestage: "marketingqualifiedlead",
  // };
  // const SimplePublicObjectInput = { properties };

  // console.log("SimplePublicObjectInput", SimplePublicObjectInput);

  // try {
  //   const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
  //     SimplePublicObjectInput
  //   );
  //   console.log(JSON.stringify(apiResponse, null, 2));
  // } catch (e: any) {
  //   e.message === "HTTP request failed"
  //     ? console.error(JSON.stringify(e.response, null, 2))
  //     : console.error(e);
  // }

  var data = JSON.stringify({
    email: "alpa@gmail.com",
    firstname: "Alejo",
    lastname: "Pala Casa",
    phone: "(555) 555-5555",
    company: "Alpacorp",
    website: "hubspot.com",
    lifecyclestage: "marketingqualifiedlead",
  });

  var config = {
    method: "post",
    url: "https://api.hubapi.com/crm/v3/objects/contacts",
    headers: {
      Authorization: "Bearer pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With , X-Auth-Token",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Max-Age": "86400",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
