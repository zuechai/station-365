import axios from "axios";

const BASE_URL = `http://localhost:8080`;
const USERS = `/users`;
const TICKETS = `/tickets`;

const ANTHONY = "a61f51sd31f13asfsa34fas3113";

export function getLoggedInUser() {
  return axios.get(`${BASE_URL}${USERS}/${ANTHONY}`);
}

export function getAllTickets() {
  return axios.get(`${BASE_URL}${TICKETS}/all`);
}
