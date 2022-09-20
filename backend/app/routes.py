from flask import request, jsonify, send_file
from app import app, db
from app.utils import allowed_file
from app.models import User, Link
from flask_jwt_extended import create_access_token
from app.schema import UserSchema, LinkSchema
import json
import os

# Test route
@app.route('/ping', methods=['GET'])
def ping():
    if not request.method == 'GET':
        return {
            "status": "error",
            "message": "Only GET requests are allowed."
        }, 405
    return {
        'status': 'success',
        'message': 'pong'
    }, 200

# API to register a new user
@app.route('/api/auth/register', methods=['POST'])
def register():
    try:
        if not request.method == 'POST':
            return {
                "status": "error",
                "message": "Only POST requests are allowed."
            }, 405
        if not request.is_json:
            return {
                "status": "error",
                "message": "The request payload is not in JSON format."
            }, 400

        data = request.get_json()
        if User.query.filter_by(email=data['email']).first():
            return {
                "status": "error",
                'message': 'Email already exists'
            }, 409
        if User.query.filter_by(username=data['username']).first():
            return {
                "status": "error",
                'message': 'Username already exists.'
            }, 409

        userData = User(username=data['username'], email=data['email'], password=data['password'], image_url='user.png',
                        display_name=data['username'], description=data['email'], theme="default")
        db.session.add(userData)
        db.session.commit()
        return {
            "status": "success",
            "message": "You have been registered successfully."
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to login a user
@app.route('/api/auth/login', methods=['POST'])
def login():
    try:
        if not request.method == 'POST':
            return {
                "status": "error",
                "message": "Only POST requests are allowed."
            }, 405
        if not request.is_json:
            return {
                "status": "error",
                "message": "The request payload is not in JSON format."
            }, 400
        email = request.json.get('email', None)
        password = request.json.get('password', None)

        if not email or not password:
            return {
                "status": "error",
                "message": "Missing email or password."
            }, 400

        userData = User.query.filter_by(email=email).first()
        if userData is None:
            return {
                "status": "error",
                "message": "No user found with that email."
            }, 401
        if userData.password != password:
            return {
                "status": "error",
                "message": "Invalid credentials."
            }, 401
        else:
            access_token = create_access_token(identity={"email": email})
            return {
                "status": "success",
                "message": "Login successful.",
                "payload": {
                    "uid": userData.uid,
                    "username": userData.username,
                    "email": userData.email,
                    "image_url": userData.image_url,
                    "display_name": userData.display_name,
                    "description": userData.description,
                    "theme": userData.theme,
                    "access_token": access_token
                }
            }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to get user data
@app.route('/api/user/<username>', methods=['GET'])
def user_display(username):
    try:
        if not request.method == 'GET':
            return {
                "status": "error",
                "message": "Only GET requests are allowed."
            }, 405
        userData = User.query.filter_by(username=username).first()
        if userData is None:
            return {
                "status": "error",
                "message": "No user found with that username."
            }, 404
        else:
            return {
                "status": "success",
                "message": "User data successfully retrieved.",
                'payload': {
                    "uid": userData.uid,
                    "username": userData.username,
                    "email": userData.email,
                    "image_url": userData.image_url,
                    "display_name": userData.display_name,
                    "description": userData.description,
                    "theme": userData.theme
                }
            }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to get links data
@app.route('/api/links/<username>', methods=['GET'])
def get_links(username):
    try:
        if not request.method == 'GET':
            return {
                "status": "error",
                "message": "Only GET requests are allowed."
            }, 405
        links = Link.query.filter_by(username=username).all()
        if links is None:
            return {
                "status": "error",
                "message": "No links found for that user."
            }, 404
        return {
            "status": "success",
            "message": "Links successfully retrieved.",
            "payload": LinkSchema(many=True).dump(links)
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to add a new link
@app.route('/api/link/<username>/add', methods=['POST'])
def add_link(username):
    try:
        if not request.method == 'POST':
            return {
                "status": "error",
                "message": "Only POST requests are allowed."
            }, 405
        if not request.is_json:
            return {
                "status": "error",
                "message": "The request payload is not in JSON format."
            }, 400
        data = request.get_json()
        linkData = Link(username,
                        title=data['title'], url=data['url'], visible=data['visible'])
        db.session.add(linkData)
        db.session.commit()
        return {
            "status": "success",
            "message": "Link has been succesfully created.",
            "payload": LinkSchema().dump(linkData)
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to update a link
@app.route('/api/link/<int:lid>/update', methods=['PUT'])
def update_link(lid):
    try:
        if not request.method == 'PUT':
            return {
                "status": "error",
                "message": "Only PUT requests are allowed."
            }, 400
        if not request.is_json:
            return {
                "status": "error",
                "message": "The request payload is not in JSON format."
            }, 400
        data = request.get_json()
        fields = (
            'title', 'url', 'visible'
        )
        for item in data.keys():
            if item in fields:
                db.session.query(Link).filter_by(lid=lid).update(
                    {
                        item: data[item]
                    })
        db.session.commit()
        return {
            "status": "success",
            "message": "Link has been successfully updated."
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to delete a link
@app.route('/api/link/<int:lid>/delete', methods=['DELETE'])
def delete_link(lid):
    try:
        if not request.method == 'DELETE':
            return {
                "status": "error",
                "message": "Only DELETE requests are allowed."
            }, 405
        linkData = Link.query.filter_by(lid=lid).first()
        if linkData is None:
            return {
                "status": "error",
                "message": "Link does not exist"
            }, 404
        else:
            db.session.delete(linkData)
            db.session.commit()
            return {
                "status": "success",
                "message": "Link has been deleted succesfully."
            }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to update theme
@app.route('/api/theme/<int:uid>/update', methods=['PUT'])
def update_theme(uid):
    try:
        if not request.method == 'PUT':
            return {
                "status": "error",
                "message": "Only PUT requests are allowed."
            }, 400
        data = request.get_json()
        db.session.query(User).filter_by(uid=uid).update({
            'theme': data['theme']
        })
        db.session.commit()
        return {
            "status": "success",
            "message": "Theme has been successfully updated."
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to update profile
@app.route('/api/profile/<int:uid>/update', methods=['PUT'])
def update_profile(uid):
    try:
        if not request.method == 'PUT':
            return {
                "status": "error",
                "message": "Only PUT requests are allowed."
            }, 400
        data = request.get_json()
        db.session.query(User).filter_by(uid=uid).update({
            'display_name': data['display_name'],
            'description': data['description']
        })
        db.session.commit()
        return {
            "status": "success",
            "message": "Profile has been successfully updated."
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500
        
# API to load image
@app.route('/api/image/<img_path>', methods=['GET'])
def load_profile_image(img_path):
    try:
        if not request.method == 'GET':
            return {
                "status": "error",
                "message": "Only GET requests are allowed."
            }, 400
        return send_file('images\\'+img_path , mimetype='image/jpg')
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to update image
@app.route('/api/image/<int:uid>/update', methods=['POST'])
def update_profile_image(uid):
    try:
        if not request.method == 'POST':
            return {
                "status": "error",
                "message": "Only POST requests are allowed."
            }, 400
        if 'img' not in request.files:
            return {
                "status": "error",
                "message": "File not found!"
            }, 404
        file = request.files['img']
        image = request.values.get('old_img').split('/')[-1]
        filename = file.filename.lower()
        if filename == '':
            return {
                "status": "error",
                "error": "No file selected"
            }, 400
        if file and allowed_file(filename):
            file_path = app.config['UPLOAD_FOLDER'] + "/" + filename
            file.save(file_path)
            db.session.query(User).filter_by(uid=uid).update({'image_url':filename})
            if image != 'user.png':
                os.unlink(os.path.join(app.config['UPLOAD_FOLDER'], image))
            db.session.commit()
            return {
                "status": "success",
                "message": "Image successfully updated."
            }, 200
        else:
            return {
                "status": "error",
                "message": "The file is not in the allowed format."
            }, 400
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to delete image
@app.route('/api/image/<int:uid>/delete', methods=['POST'])
def delete_profile_image(uid):
    try:
        if not request.method == 'POST':
            return {
                "status": "error",
                "message": "Only POST requests are allowed."
            }, 400
        if not request.is_json:
            return {
                "status": "error",
                "message": "The request payload is not in JSON format."
            }, 400
        data = request.get_json()
        db.session.query(User).filter_by(uid=uid).update({'image_url': 'user.png'})
        image = data['image_url'].split('/')[-1].lower()
        if image != 'user.png':
            os.unlink(os.path.join(app.config['UPLOAD_FOLDER'], image))
        db.session.commit()
        return {
            "status": "success",
            "message": "Image successfully removed."
        }, 200
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500

# API to update account
@app.route('/api/account/<int:uid>/update', methods=['PUT'])
def update_account(uid):
    try:
        if not request.method == 'PUT':
            return {
                "status": "error",
                "message": "Only PUT requests are allowed."
            }, 400
        data = request.get_json()
        db.session.query(User).filter_by(uid=uid).update({
            'email': data['email'],
        })
        db.session.commit()
        return {
            "status": "success",
            "message": "Your email has been successfully updated."
        }
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }

# API to delete account
@app.route('/api/account/<int:uid>/delete', methods=['DELETE'])
def delete_user(uid):
    try:
        if not request.method == 'DELETE':
            return {
                "status": "error",
                "message": "Only DELETE requests are allowed."
            }, 400
        user = db.session.query(User).filter_by(uid=uid)
        if not user:
            return {
                "status": "error",
                "message": "User not found."
            }, 404
        user.delete()
        db.session.commit()
        return {
            "status": "success",
            "message": "User successfully deleted."
        }, 200
            
    except:
        return {
            "status": "error",
            "message": "Something went wrong."
        }, 500
