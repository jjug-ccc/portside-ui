#!/bin/sh

fly -t home set-pipeline \
   -p portside-ui \
   -c `dirname $0`/pipeline.yml \
   -l `dirname $0`/credentials.yml
