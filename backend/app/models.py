from app import app, db


class User(db.Model):
    __tablename__ = 'user'

    uid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(30), nullable=False)
    image_url = db.Column(db.String(100), nullable=False)
    display_name = db.Column(db.String(30), nullable=False)
    description = db.Column(db.String(80), nullable=False)
    theme = db.Column(db.String(20), nullable=False)

    def __init__(self, username, email, password, image_url, display_name, description, theme):
        self.username = username
        self.email = email
        self.password = password
        self.image_url = image_url
        self.display_name = display_name
        self.description = description
        self.theme = theme


class Link(db.Model):
    __tablename__ = 'link'

    lid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30),
                         db.ForeignKey('user.username', ondelete='cascade'),
                         nullable=False
                         )
    title = db.Column(db.String(30), nullable=False)
    url = db.Column(db.String(50), nullable=False)
    visible = db.Column(db.Boolean, nullable=False)

    def __init__(self, username, title, url, visible):
        self.username = username
        self.title = title
        self.url = url
        self.visible = visible
