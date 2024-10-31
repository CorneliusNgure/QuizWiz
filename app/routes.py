from app import app
from flask import render_template
@app.route("/home")
def index():
    return render_template("index.html")

@app.route("/landing_page")
def landing_page():
    return render_template("landing_page.html")