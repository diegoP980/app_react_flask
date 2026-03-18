from flask_restful import reqparse, fields, abort
from ...models import Task
from ...extensions import db

task_fields = {
    'id' : fields.Integer,
    'title' : fields.String,
    'description' : fields.String,
    'status' : fields.String,
    'created_date' : fields.DateTime,
}

""" FUNCIONES DE VALIDACION """
def empty_field(value) :
    if not value or value.strip() == '':
        raise ValueError("El título es requerido.")
    
    return value

def not_found (req, id) :
    if not req :
        abort(404, message=f'The resource requested with id {id} does not exist')

# (dt_format='iso8601')

task_args = reqparse.RequestParser()
task_args.add_argument('title', type=empty_field, required=True, help='El título es requerido.')
task_args.add_argument('description', type=str)
task_args.add_argument('status', type=str)
        
""" FUNCIONES PARA EL MODULO resources.py"""
def get_task_list() :
    task_list = Task.query.order_by(Task.id.desc()).all()
    return task_list

def get_task(id) :
    task = Task.query.filter_by(id=id).first()
    not_found(task, id)
        
    return task

def create_task() :
    data = task_args.parse_args()
    task = Task(title=data['title'], description=data['description'])
        
    db.session.add(task)
    db.session.commit()
        
    res_response = { "success" : True }
    return res_response, 201

def update_task(id) :
    data = task_args.parse_args()
    task = Task.query.filter_by(id=id).first()
    not_found(task, id)
        
    task.title = data['title']
    task.description = data['description']
    task.status = data['status']
    db.session.commit()
        
    res_response = { "success" : True }
    return res_response

def delete_task(id) :
    task = Task.query.filter_by(id=id).first()
    not_found(task, id)
        
    db.session.delete(task)
    db.session.commit()
        
    res_response = { "success" : True }
    return res_response


