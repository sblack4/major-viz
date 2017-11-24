#!/usr/bin/python

import sys 
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/major-viz/major_viz')

from major_viz import app as application