from decouple import config

SECRET_KEY = config("SECRET_KEY")
DEBUG = True
ALLOWED_HOSTS = config("ALLOWED_HOSTS", default="127.0.0.1,localhost")
