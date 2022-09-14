from marshmallow import Schema


class UserSchema(Schema):
    class Meta:
        fields = (
            'uid', 
            'username', 
            'email', 
            'password', 
            'image_url',
            'display_name', 
            'description', 
            'theme'
        )


class LinkSchema(Schema):
    class Meta:
        fields = (
            'lid', 
            'username', 
            'title', 
            'url', 
            'visible'
        )
