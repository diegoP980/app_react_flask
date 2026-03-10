import click
from .extensions import db
from .models import Task

# @click.command('init-db')
# def init_db_command() :
#     from app import create_app
    
#     with create_app().app_context() :
#         db.create_all()
#         click.echo('Base de datos inicializada.')

@click.command('init-db')
def init_db_command() :
    db.create_all()
    click.echo('Base de datos inicializada.')