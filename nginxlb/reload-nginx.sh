#!/bin/sh

# Render Nginx configuration template using values from Consul,
# but do not reload because Nginx has't started yet
preStart() {
    consul-template \
        -once \
        -consul consul:8500 \
        -template "/etc/consul-templates/nginx.conf:/etc/nginx/conf.d/app.conf"
}

# Render Nginx configuration template using values from Consul,
# then gracefully reload Nginx
onChange() {
    consul-template \
        -once \
        -consul consul:8500 \
        -template "/etc/consul-templates/nginx.conf:/etc/nginx/conf.d/app.conf:nginx -s reload"
}

until
    cmd=$1
    if [ -z "$cmd" ]; then
        onChange
    fi
    shift 1
    $cmd "$@"
    [ "$?" -ne 127 ]
do
    onChange
    exit
done