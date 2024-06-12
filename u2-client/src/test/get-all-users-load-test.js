import { sleep } from 'k6';
import http from 'k6/http';

export const options = {

  discardResponseBodies: true,

  scenarios: {

    contacts: {

      executor: 'ramping-vus',

      startVUs: 0,

      stages: [

        { duration: '60s', target: 100 },

        { duration: '30s', target: 0 },

      ],

      gracefulRampDown: '15s',

    },

  },

};


export default function () {

  http.get('http://localhost:80/api/UserService/GetAllUsers');
  sleep(1);
}