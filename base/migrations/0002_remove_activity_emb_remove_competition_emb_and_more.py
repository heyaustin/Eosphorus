# Generated by Django 4.2.1 on 2024-01-06 14:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='emb',
        ),
        migrations.RemoveField(
            model_name='competition',
            name='emb',
        ),
        migrations.RemoveField(
            model_name='ourtag',
            name='emb',
        ),
        migrations.RemoveField(
            model_name='ourtag',
            name='emb_org',
        ),
    ]
