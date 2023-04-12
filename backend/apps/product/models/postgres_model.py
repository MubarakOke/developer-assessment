from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.utils.helpers.models import BaseModelMixin
# Create your models here.

class Product(BaseModelMixin):
    name = models.CharField(_("Product name"), null=False, blank=False, max_length=255)
    description = models.TextField(_("Product Discription"), null=False, blank=False)
    sku = models.CharField(_("Stock keeping Unit"), null=False, blank=False, max_length=15)
    price = models.PositiveIntegerField(_("Product price"),null=False, blank=False)
    image = models.URLField(_("Image URL"), max_length=1000)

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        ordering= ("-id",)

    def __str__(self):
        return f"<{self.__class__.__name__} {self.id}>-<{self.name}>"