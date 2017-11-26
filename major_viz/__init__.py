from flask import Blueprint, render_template, abort, Flask, send_from_directory, jsonify
from jinja2 import TemplateNotFound
from sys import version_info
if version_info[0] == 3:
    import urllib
else:
    import urllib2
import json

major_viz = Blueprint('major_viz', __name__,
                        template_folder='templates')

@major_viz.route('/', defaults={'page': 'index'})
@major_viz.route('/<page>')
def show(page):
    try:
        return render_template('pages/%s.html' % page)
    except TemplateNotFound:
        abort(404)


app = Flask(__name__)
app.register_blueprint(major_viz)
# Blueprint can be registered many times
app.register_blueprint(major_viz, url_prefix='/pages')

# serve css
@app.route('/css/<path:path>')
def send_css(path):
      return send_from_directory('css',path)

# serve images
@app.route('/img/<path:path>')
def send_img(path):
      return send_from_directory('img',path)

# serve data 
@app.route('/js/<path:path>')
def send_js(path):
      return send_from_directory('js',path)

# serve fonts 
@app.route('/fonts/<path:path>')
def send_font(path):
      return send_from_directory('fonts',path)

# serve js 
@app.route('/data/<path:path>')
def send_data(path):
      return send_from_directory('data',path)

@app.route('/api/<description>')
def get_jobs(description):
      response = urllib2.urlopen("https://jobs.github.com/positions.json?description="+description)
      return jsonify(json.load(response))


if __name__=='__main__':
  app.run()
