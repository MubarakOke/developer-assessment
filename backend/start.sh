#!/bin/bash
python manage.py collectstatic --no-input --settings=config.settings.local;
python manage.py makemigrations --settings=config.settings.local;
python manage.py migrate --settings=config.settings.local;
python manage.py runserver --settings=config.settings.local 0.0.0.0:8000;
