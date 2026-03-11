# Base de datos
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
import pytz

class Base(DeclarativeBase) :
    pass

db = SQLAlchemy(model_class=Base)

# CORS
from flask_cors import CORS
cors = CORS(resources={
        r'/api/*' : {
            'origins' : '*'
        }
    })

