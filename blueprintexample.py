from flask import Flask, send_from_directory
from major_viz.major_viz import major_viz

app = Flask(__name__)
app.register_blueprint(major_viz)
# Blueprint can be registered many times
app.register_blueprint(major_viz, url_prefix='/pages')

# serve css
@app.route('/css/<path:path>')
def send_css(path):
      return send_from_directory('major_viz/css',path)

# serve images
@app.route('/img/<path:path>')
def send_img(path):
      return send_from_directory('major_viz/img',path)

# serve data 
@app.route('/js/<path:path>')
def send_js(path):
      return send_from_directory('major_viz/js',path)

# serve fonts 
@app.route('/fonts/<path:path>')
def send_font(path):
      return send_from_directory('major_viz/fonts',path)

# serve js 
@app.route('/data/<path:path>')
def send_data(path):
      return send_from_directory('major_viz/data',path)


if __name__=='__main__':
  app.run()
