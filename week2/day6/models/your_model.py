from datetime import datetime
from database.index import db


class Organizer(db.Model):
    __tablename__ = 'organizers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(30))

    # علاقة مع Event
    events = db.relationship(
        'Event', back_populates='organizer', cascade='all, delete'
    )


class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    date = db.Column(db.Date, nullable=False)
    location = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)

    # علاقة مع Organizer
    organizer_id = db.Column(
        db.Integer,
        db.ForeignKey('organizers.id', ondelete='SET NULL'),
        nullable=True
    )
    organizer = db.relationship('Organizer', back_populates='events')

    # علاقة مع Ticket
    tickets = db.relationship(
        'Ticket', back_populates='event', cascade='all, delete-orphan'
    )


class Attendee(db.Model):
    __tablename__ = 'attendees'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(30))

    # علاقة مع Ticket
    tickets = db.relationship(
        'Ticket', back_populates='attendee', cascade='all, delete-orphan'
    )


class Ticket(db.Model):
    __tablename__ = 'tickets'
    id = db.Column(db.Integer, primary_key=True)

    event_id = db.Column(
        db.Integer,
        db.ForeignKey('events.id', ondelete='CASCADE'),
        nullable=False
    )
    attendee_id = db.Column(
        db.Integer,
        db.ForeignKey('attendees.id', ondelete='CASCADE'),
        nullable=False
    )
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    # العلاقات
    event = db.relationship('Event', back_populates='tickets')
    attendee = db.relationship('Attendee', back_populates='tickets')

    __table_args__ = (
        db.UniqueConstraint('event_id', 'attendee_id', name='uq_event_attendee'),
    )
