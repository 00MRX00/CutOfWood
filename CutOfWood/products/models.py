from accounts.models import Account
from django.db import models

from datetime import datetime

import sys
sys.path.append('../')


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField('Название категории', max_length=255, unique=True)
    description = models.TextField(
        'Описание категории', default="", blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField('Название товара', max_length=255)
    description = models.TextField('Описание товара', default="", blank=True)
    price = models.FloatField('Цена товара')
    preview = models.ImageField('Превью', upload_to="productPreviews/")
    category = models.ForeignKey(
        Category, verbose_name="Категория", on_delete=models.SET_NULL, null=True)
    hidden = models.BooleanField('Черновик', default=False)
    date_added = models.DateTimeField('Дата добавления', auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'


class Photo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField('Название фото', max_length=255)
    description = models.TextField('Описание фото', default="", blank=True)
    image = models.ImageField('Картинка', upload_to="images/")
    product = models.ForeignKey(
        Product, verbose_name="Товар", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Фото товара'
        verbose_name_plural = 'Фото товара'


class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    products = models.ManyToManyField(Product, verbose_name="Товары", blank=True)
    user = models.OneToOneField(
        Account, verbose_name="Пользователь", on_delete=models.CASCADE)
    price = models.FloatField('Сумма корзины')
    last_update = models.DateTimeField(
        'Последнее изменение', default=datetime.now(), blank=True)

    def __str__(self):
        return self.user.email + " - " + str(self.last_update)

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'

class OrderStatus(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField('Название статуса', max_length=255)
    description = models.TextField('Описание статуса', default="", blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статус'
        verbose_name_plural = 'Статусы'

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    products = models.ManyToManyField(Product, verbose_name="Товары", blank=True)
    user = models.ForeignKey(Account, verbose_name="Пользователь", on_delete=models.CASCADE)
    price = models.FloatField('Сумма заказа')
    order_date = models.DateTimeField('Дата заказа', auto_now_add=True)
    status = models.ForeignKey(OrderStatus, verbose_name="Статус заказа", on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.user.email + " - " + str(self.order_date)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'