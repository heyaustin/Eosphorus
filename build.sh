#!/usr/bin/env bash
# exit on error
set -o errexit

# sudo apt update
# sudo apt install firewalld
# sudo systemctl enable firewalld
# sudo systemctl start firewalld
# sudo firewall-cmd --state
# sudo firewall-cmd --list-all
# sudo firewall-cmd --permanent --add-port=80/tcp
# sudo firewall-cmd --permanent --add-port=443/tcp
# sudo firewall-cmd --reload

# sudo apt install nginx-extras
# sudo sed -i 's/user www-data/user ubuntu/g' /etc/nginx/nginx.conf

cd ~/Eosphorus
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python manage.py loaddata ./base/fixtures/video_qa.json
python manage.py loaddata ./base/fixtures/mbti_qa.json

# pgrep gunicorn
# pgrep nginx

cd ~/Eosphorus
git pull
sudo pkill -f gunicorn

sudo cp -f eosphorus.conf /etc/nginx/sites-available
sudo ln -nsf /etc/nginx/sites-available/eosphorus.conf /etc/nginx/sites-enabled
sudo nohup gunicorn eosphorus.wsgi:application > nohup.txt 2>&1 &

sudo systemctl restart nginx


# python manage.py collectstatic --no-input

# python manage.py runserver 0.0.0.0:80 --insecure
# sudo nohup python3 manage.py runserver 0.0.0.0:80 --insecure

### sudo chown -R www-data:www-data /home/ubuntu/Eosphorus/static/