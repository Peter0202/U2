#!/usr/bin/env bash

kubectl apply --server-side --force-conflicts -f https://github.com/envoyproxy/gateway/releases/download/v1.0.1/install.yaml

kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available

kubectl -n envoy-gateway-system port-forward service/envoy-gateway 8888:80 &

kubectl apply -f .