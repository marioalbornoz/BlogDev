# Generated by Django 2.2.12 on 2020-08-14 02:32

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='coment',
            field=models.TextField(default=datetime.datetime(2020, 8, 14, 2, 32, 40, 962989, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
