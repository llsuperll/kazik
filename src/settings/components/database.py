from decouple import Csv, Config, RepositoryEnv
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'
BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent
DOTENV_FILE = BASE_DIR / 'config' / '.env'

config = Config(RepositoryEnv(DOTENV_FILE))

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": config("DB_NAME"),
        "USER": config("DB_USER"),
        "PASSWORD": config("DB_PASSWORD"),
        "HOST": config("DB_HOST"),
        "PORT": config("DB_PORT", "5432"),
    }
}
