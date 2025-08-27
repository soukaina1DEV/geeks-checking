from psycopg2 import connect
from psycopg2.extras import RealDictConnection
import os
from dotenv import load_dotenv

load_dotenv()


def connect_to_db():
    try:
        conn = connect(
            host='ep-calm-sky-aduulw9g-pooler.c-2.us-east-1.aws.neon.tech',
            database='neondb',
            user='neondb_owner',
            password='npg_AcgkdTtr1PB2',
            sslmode='require',
            connection_factory=RealDictConnection
        )
        return conn
    except Exception as e:
        print(e)
        return None
