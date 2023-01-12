import axios from "axios";
import { Client } from "@hubspot/api-client";

export const GetContact = async () => {
  // const config = {
  //   method: "get",
  //   url: "https://api.hubapi.com/crm/v3/objects/contacts",
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
  const hubspotClient = new Client({
    accessToken: "pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
    basePath: "https://finamex.vercel.app/",
    defaultHeaders: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "false",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Expose-Headers": "Content-Type, Authorization",
    },
  });

  const limit = 100;
  const after = undefined;
  const properties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;

  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(
      limit,
      after,
      properties,
      propertiesWithHistory,
      associations,
      archived
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e: any) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
};

export const PostContact = async () => {
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

  const data = JSON.stringify({
    email: "alpa@gmail.com",
    firstname: "Alejo",
    lastname: "Pala Casa",
    phone: "(555) 555-5555",
    company: "Alpacorp",
    website: "hubspot.com",
    lifecyclestage: "marketingqualifiedlead",
  });

  const config = {
    method: "post",
    url: "https://api.hubapi.com/crm/v3/objects/contacts",
    headers: {
      Authorization: "Bearer pat-na1-e7836329-3ff5-4c02-a70e-ad4e00798f0b",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "false",
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
