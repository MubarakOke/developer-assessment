# Generated by Django 4.2 on 2023-04-12 21:51

import apps.utils.helpers.models.base
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Creation time')),
                ('timestamp', models.DateTimeField(auto_now=True, null=True, verbose_name='Update time')),
                ('name', models.CharField(max_length=255, verbose_name='Product name')),
                ('description', models.TextField(verbose_name='Product Discription')),
                ('sku', models.CharField(max_length=15, verbose_name='Stock keeping Unit')),
                ('price', models.PositiveIntegerField(verbose_name='Product price')),
                ('image', models.URLField(max_length=1000, verbose_name='Image URL')),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
                'ordering': ('-id',),
            },
            bases=(apps.utils.helpers.models.base.BaseModelBaseMixin, models.Model),
        ),
    ]