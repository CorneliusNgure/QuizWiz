from app import app
from flask import render_template
@app.route("/home")
def landing_page():
    return render_template("landing_page.html")

@app.route("/play")
def index():
    return render_template("index.html")