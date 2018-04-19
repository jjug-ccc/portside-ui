#!/bin/sh

fly -t dev set-pipeline \
   -p portside-ui \
   -c `dirname $0`/pipeline.yml \
   -l `dirname $0`/credentials.yml
