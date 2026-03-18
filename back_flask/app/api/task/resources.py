from flask_restful import Resource, marshal_with
from .service import *

class TaskGetList(Resource) :
    @marshal_with(task_fields)
    def get(self) :
        return get_task_list()
    
class TaskGet(Resource) :
    @marshal_with(task_fields)
    def get(self, task_id) :
        return get_task(task_id)
    
class TaskCreate(Resource) :
    def post(self) :
        return create_task()
    
class TaskUpdate(Resource) :
    def patch(self, task_id) :
        return update_task(task_id)
    
class TaskDelete(Resource) :
    def delete(self, task_id) :
        return delete_task(task_id)