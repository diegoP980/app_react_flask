from .task import *
from flask import Blueprint
from flask_restful import Api

bp = Blueprint('api', __name__)
api = Api(bp)

api.add_resource(TaskGetList, '/task/list')
api.add_resource(TaskCreate, '/task/create')
api.add_resource(TaskGet, '/task/<int:task_id>')
api.add_resource(TaskUpdate, '/task/update/<int:task_id>')
api.add_resource(TaskDelete, '/task/delete/<int:task_id>')


