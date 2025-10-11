import axios from "axios";

type PostRequest = {
  requestData: {
    distance: number,
    distanceUnit: string,
    location: {
      geocodes: {
        latitude: string,
        longitude: string,
      },
      address?: object,
      placeName?: string,
    },
    options: {
      range: {
        count: number,
        start: number,
      },
      sort: {
        direction: string,
        primary: string,
      },
      findFilters?: object[],
      operationName?: string,
      useFirstAmbiguos?: boolean,
    },
    culture?: string,
    metaDataOptions?: number,
  }
}

type PostRequestHeader = {
  applicationId: string,
  correlationId: string,
  requestMessageId: string,
  requestTs: string,
  userBid: string,
  userId: string,
}

const visaApiKey = process.env.VISA_API_KEY;
const visaUserId = process.env.VISA_USER_ID;
const visaPassword = process.env.VISA_PASSWORD;

const endPoint: string = "/globalatmlocator/v3/localatms/totalsinquiry";
const baseUrl: string = `https://sandbox.api.visa.com${endPoint}`;

async function fetchNearbyAtms(latitude: string, longitude: string, maxResults: number = 10) {
  const Request: PostRequest = {
    requestData: {
      distance: 20,
      distanceUnit: "mi",
      location: {
        geocodes: {
          latitude: latitude,
          longitude: longitude,
        }
      },
      metaDataOptions: 0,
      options: {
        findFilters: [
          {
            filterName: "OPER_HRS",
            filterValue: "C",
          },
          {
            filterName: "WHEELCHAIR",
            filterValue: "Y",
          }
        ],
        range: {
          count: 99,
          start: 0,
        },
        sort: {
          direction: "asc",
          primary: "distance",
        },
        useFirstAmbiguos: true
      }
    }
  }
}

export default fetchNearbyAtms
