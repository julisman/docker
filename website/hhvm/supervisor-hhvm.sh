#!/bin/bash
# exec hhvm --mode server -vServer.Type=fastcgi -vServer.Port=9000 -v Log.UseLogFile=true -v Log.File=/proc/self/fd/2
exec hhvm --mode server --config /etc/hhvm/hhvm.ini

