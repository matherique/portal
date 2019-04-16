FROM python:3.6-alpine
WORKDIR /usr/src/app/
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 5002

CMD ['python', 'main.py']