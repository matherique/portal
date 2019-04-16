FROM python:3.6-alpine
ADD . /usr/src/app
WORKDIR /usr/src/app/
RUN pip install -r requirements.txt
CMD ["python", "main.py"]