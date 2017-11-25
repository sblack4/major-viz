#!/usr/bin/python

# to test my wsgi file 


import sys 
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/major-viz/major_viz')

from major_viz import app as application


if __name__ == "__main__":
    application.run()