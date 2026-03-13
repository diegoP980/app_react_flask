from flask_restful import Resource, marshal_with
from .service import *

class TaskGetList(Resource) :
    @marshal_with(task_fields_get)
    def get(self) :
        return get_task_list()
    
class TaskGet(Resource) :
    @marshal_with(task_fields_get)
    def get(self, task_id) :
        return get_task(task_id)
    
class TaskCreate(Resource) :
    @marshal_with(task_fields_post)
    def post(self) :
        return create_task()
    
class TaskUpdate(Resource) :
    @marshal_with(task_fields_patch)
    def patch(self, task_id) :
        return update_task(task_id)
    
class TaskDelete(Resource) :
    @marshal_with(task_fields_get)
    def delete(self, task_id) :
        return delete_task(task_id)