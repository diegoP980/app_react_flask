from ..extensions import db
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer, DateTime, func
from datetime import datetime, timezone

class Task (db.Model) :
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title : Mapped[str] = mapped_column(String(40), nullable=False, )
    description : Mapped[str] = mapped_column(String(100), default='No description.')
    status : Mapped[str] = mapped_column(String(20), default='Incomplete')
    created_date : Mapped[datetime] = mapped_column(DateTime(timezone=True), default=func.now())
    
    # lambda : datetime.now(timezone.utc)