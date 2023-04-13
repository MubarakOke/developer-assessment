# syntax=docker/dockerfile:1
FROM python:3.10.5-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend

COPY Pipfile Pipfile.lock /backend/
RUN pip install pipenv && pipenv install
COPY . /backend/
