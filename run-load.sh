cd u2-client/src/tests

echo "Executing load tests with K6."

k6 run get-all-users-load-test.js