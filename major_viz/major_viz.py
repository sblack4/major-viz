from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

major_viz = Blueprint('major_viz', __name__,
                        template_folder='templates')

@major_viz.route('/', defaults={'page': 'index'})
@major_viz.route('/<page>')
def show(page):
    try:
        return render_template('pages/%s.html' % page)
    except TemplateNotFound:
        abort(404)
