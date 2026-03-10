from ..extensions import db
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer, DateTime, func
import datetime

class Task (db.Model) :
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title : Mapped[str] = mapped_column(String(40), nullable=False, )
    description : Mapped[str] = mapped_column(String(100), default='No description.')
    status : Mapped[str] = mapped_column(String(20), default='Incomplete')
    created_date : Mapped[datetime.datetime] = mapped_column(DateTime, default=func.now())