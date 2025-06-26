from decouple import Csv, Config, RepositoryEnv
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'
BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent
DOTENV_FILE = BASE_DIR / 'config' / '.env'

config = Config(RepositoryEnv(DOTENV_FILE))

SECRET_KEY = config("SECRET_KEY")
DEBUG = False
ALLOWED_HOSTS = config("ALLOWED_HOSTS", default="127.0.0.1,localhost")
