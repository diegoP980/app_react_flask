import click
from .extensions import db
from flask import current_app

@click.command('init-db')
def init_db_command() :
    with current_app.app_context() :
        db.create_all()
        click.echo('Base de datos inicializada.')