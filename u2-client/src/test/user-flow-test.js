import { sleep } from 'k6';
import http from 'k6/http';


export const options = {
    scenarios: {
        getAllUsers: {
            executor: 'ramping-arrival-rate',
            startTime: '30s',
            startRate: 50,
            timeUnit: '1s',
            stages: [
                { target: 100, duration: '30s' }, 
                { target: 100, duration: '3m30s' }, 
                { target: 0, duration: '30s' }, 
            ],
            preAllocatedVUs: 50, 
            maxVUs: 100, 
            exec: 'getAllUsers', 
        },
        getAllVideos: {
            executor: 'ramping-arrival-rate',
            startTime: '30s',
            startRate: 500,
            timeUnit: '1s',
            stages: [
                { target: 1500, duration: '30s' }, 
                { target: 1500, duration: '3m30s' }, 
                { target: 0, duration: '30s' }, 
            ],
            preAllocatedVUs: 500, 
            maxVUs: 1500, 
            exec: 'getAllVideos', 
        },
        getVideosForUser: {
            executor: 'ramping-arrival-rate',
            startTime: '30s',
            startRate: 500,
            timeUnit: '1s',
            stages: [
                { target: 1500, duration: '30s' }, 
                { target: 1500, duration: '3m30s' }, 
                { target: 0, duration: '30s' }, 
            ],
            preAllocatedVUs: 500, 
            maxVUs: 1500, 
            exec: 'getVideosForUser', 
        }
    },
    discardResponseBodies: true,
};


export function getAllUsers() {
    http.get('http://localhost:80/api/UserService/GetAllUsers');
    sleep(2);
}

export function getAllVideos() {
    http.get('http://localhost:80/api/VideoService/GetAllVideos');
    sleep(1);
}

export function getVideosForUser() {
    http.get('http://localhost:80/api/VideoService/GetVideosForUser?id=2');
    sleep(1);
}
