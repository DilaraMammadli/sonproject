# Generated by Django 3.2 on 2023-07-28 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactblog', '0003_auto_20230728_1704'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='mobile',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
