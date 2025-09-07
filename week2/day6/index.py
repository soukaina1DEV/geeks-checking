import os, sys
from datetime import datetime
from dotenv import load_dotenv
from flask import (
    Flask, render_template, request, redirect, url_for, flash, jsonify
)
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, SelectField
from wtforms.fields import EmailField, TelField, SubmitField
from wtforms.validators import DataRequired, Length, Email, Optional

from database.index import db, init_db
from models.your_model import Event, Organizer, Attendee, Ticket

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-change-me')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

init_db(app)

# -------------------------
# Forms
# -------------------------
class EventForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(max=150)])
    date = DateField('Date', validators=[DataRequired()], format='%Y-%m-%d')
    location = StringField('Location', validators=[DataRequired(), Length(max=200)])
    description = TextAreaField('Description', validators=[Optional(), Length(max=2000)])
    organizer_id = SelectField('Organizer', coerce=int, validators=[Optional()])
    submit = SubmitField('Save')

class OrganizerForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(max=120)])
    email = EmailField('Email', validators=[DataRequired(), Email(), Length(max=120)])
    phone = TelField('Phone', validators=[Optional(), Length(max=30)])
    submit = SubmitField('Save')

class AttendeeForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(max=120)])
    email = EmailField('Email', validators=[DataRequired(), Email(), Length(max=120)])
    phone = TelField('Phone', validators=[Optional(), Length(max=30)])
    submit = SubmitField('Save')

# -------------------------
# Helpers
# -------------------------
PER_PAGE = 6

def paginate(query, page):
    return query.paginate(page=page, per_page=PER_PAGE, error_out=False)

# -------------------------
# Home redirect
# -------------------------
@app.route('/')
def home():
    return redirect(url_for('events_list'))

# -------------------------
# Events
# -------------------------
@app.route('/events')
def events_list():
    page = request.args.get('page', 1, type=int)
    q = request.args.get('q', '', type=str)
    query = Event.query
    if q:
        query = query.filter(Event.name.ilike(f'%{q}%'))
    pagination = paginate(query.order_by(Event.date.asc()), page)
    return render_template('index.html', pagination=pagination, q=q)

@app.route('/events/create', methods=['GET', 'POST'])
def events_create():
    form = EventForm()
    form.organizer_id.choices = [(0, '— None —')] + [(o.id, o.name) for o in Organizer.query.order_by(Organizer.name)]

    if form.validate_on_submit():
        organizer_id = form.organizer_id.data or None
        if organizer_id == 0:
            organizer_id = None
        event = Event(
            name=form.name.data,
            date=form.date.data,
            location=form.location.data,
            description=form.description.data,
            organizer_id=organizer_id,
        )
        db.session.add(event)
        db.session.commit()
        flash('Event created successfully!', 'success')
        return redirect(url_for('events_list'))

    return render_template('create.html', form=form)

@app.route('/events/<int:event_id>/edit', methods=['GET', 'POST'])
def events_edit(event_id):
    event = Event.query.get_or_404(event_id)
    form = EventForm(obj=event)
    form.organizer_id.choices = [(0, '— None —')] + [(o.id, o.name) for o in Organizer.query.order_by(Organizer.name)]
    form.organizer_id.data = event.organizer_id or 0

    if form.validate_on_submit():
        event.name = form.name.data
        event.date = form.date.data
        event.location = form.location.data
        event.description = form.description.data
        event.organizer_id = form.organizer_id.data or None
        if event.organizer_id == 0:
            event.organizer_id = None
        db.session.commit()
        flash('Event updated successfully!', 'success')
        return redirect(url_for('events_list'))

    return render_template('edit.html', form=form, event=event)

@app.route('/events/<int:event_id>')
def events_details(event_id):
    event = Event.query.get_or_404(event_id)
    attendees = [t.attendee for t in event.tickets]
    all_attendees = Attendee.query.order_by(Attendee.name).all()
    return render_template('details.html', event=event, attendees=attendees, all_attendees=all_attendees)

@app.route('/events/<int:event_id>/delete', methods=['POST'])
def events_delete(event_id):
    event = Event.query.get_or_404(event_id)
    db.session.delete(event)
    db.session.commit()
    flash('Event deleted.', 'info')
    return redirect(url_for('events_list'))

@app.route('/events/<int:event_id>/register', methods=['POST'])
def events_register(event_id):
    event = Event.query.get_or_404(event_id)
    attendee_id = request.form.get('attendee_id', type=int)
    attendee = Attendee.query.get(attendee_id)
    if not attendee:
        flash('Attendee not found.', 'danger')
        return redirect(url_for('events_details', event_id=event_id))

    existing = Ticket.query.filter_by(event_id=event.id, attendee_id=attendee.id).first()
    if existing:
        flash('This attendee is already registered for the event.', 'warning')
    else:
        ticket = Ticket(event_id=event.id, attendee_id=attendee.id)
        db.session.add(ticket)
        db.session.commit()
        flash('Registration successful!', 'success')
    return redirect(url_for('events_details', event_id=event_id))

# -------------------------
# Organizers
# -------------------------
@app.route('/organizers', methods=['GET', 'POST'])
def organizers_list():
    form = OrganizerForm()
    if form.validate_on_submit():
        org = Organizer(name=form.name.data, email=form.email.data, phone=form.phone.data)
        db.session.add(org)
        db.session.commit()
        flash('Organizer created.', 'success')
        return redirect(url_for('organizers_list'))

    organizers = Organizer.query.order_by(Organizer.name).all()
    return render_template('organizers.html', organizers=organizers, form=form)

@app.route('/organizers/<int:org_id>/delete', methods=['POST'])
def organizers_delete(org_id):
    org = Organizer.query.get_or_404(org_id)
    db.session.delete(org)
    db.session.commit()
    flash('Organizer deleted.', 'info')
    return redirect(url_for('organizers_list'))

# -------------------------
# Attendees
# -------------------------
@app.route('/attendees', methods=['GET', 'POST'])
def attendees_list():
    form = AttendeeForm()
    if form.validate_on_submit():
        if Attendee.query.filter_by(email=form.email.data).first():
            flash('Email already exists for another attendee.', 'warning')
        else:
            att = Attendee(
                name=form.name.data,
                email=form.email.data,
                phone=form.phone.data
            )
            db.session.add(att)
            db.session.commit()
            flash('Attendee created.', 'success')
            return redirect(url_for('attendees_list'))

    attendees = Attendee.query.order_by(Attendee.name).all()
    return render_template('attendees.html', attendees=attendees, form=form)

@app.route('/attendees/<int:att_id>/delete', methods=['POST'])
def attendees_delete(att_id):
    att = Attendee.query.get_or_404(att_id)
    db.session.delete(att)
    db.session.commit()
    flash('Attendee deleted.', 'info')
    return redirect(url_for('attendees_list'))

# -------------------------
# Stats (Dashboard + APIs for Chart.js)
# -------------------------
@app.route('/stats')
def stats():
    return render_template('stats.html')

@app.route('/api/stats/events_per_organizer')
def api_events_per_organizer():
    rows = db.session.query(Organizer.name, db.func.count(Event.id)) \
        .outerjoin(Event) \
        .group_by(Organizer.id) \
        .order_by(Organizer.name) \
        .all()
    labels = [r[0] for r in rows]
    data = [int(r[1]) for r in rows]
    return jsonify({"labels": labels, "data": data})

@app.route('/api/stats/popular_events')
def api_popular_events():
    rows = db.session.query(Event.name, db.func.count(Ticket.id)) \
        .outerjoin(Ticket, Ticket.event_id == Event.id) \
        .group_by(Event.id) \
        .order_by(db.func.count(Ticket.id).desc()) \
        .limit(10).all()
    labels = [r[0] for r in rows]
    data = [int(r[1]) for r in rows]
    return jsonify({"labels": labels, "data": data})

@app.route('/api/stats/attendees_over_time')
def api_attendees_over_time():
    rows = db.session.query(
        db.func.to_char(Ticket.created_at, 'YYYY-MM'),
        db.func.count(Ticket.id)
    ).group_by(db.func.to_char(Ticket.created_at, 'YYYY-MM')) \
     .order_by(db.func.to_char(Ticket.created_at, 'YYYY-MM')).all()
    labels = [r[0] for r in rows]
    data = [int(r[1]) for r in rows]
    return jsonify({"labels": labels, "data": data})

# -------------------------
# CLI Helper: create tables
# -------------------------
if __name__ == '__main__':
    if '--init-db' in sys.argv:
        with app.app_context():
            db.create_all()
            print('✅ Tables created.')
    else:
        app.run(debug=True)
