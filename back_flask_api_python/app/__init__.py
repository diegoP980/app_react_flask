from flask import Flask
from .extensions import db

def create_app() :
    app = Flask(__name__)
    app.config.from_mapping(
        SQLALCHEMY_DATABASE_URI = 'sqlite:///task_database.db'
    )
    
    db.init_app(app)
    
    from .cli import init_db_command
    app.cli.add_command(init_db_command)
    
    from .api import bp as task_bp
    app.register_blueprint(task_bp, url_prefix='/api')

    return app
    

    