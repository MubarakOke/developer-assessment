from django.db import models
from django.utils.translation import gettext_lazy as _

class BaseModelBaseMixin:
    def is_instance_exist(self):
        return self.__class__.objects.filter(id=self.id).exists()
    
    @property
    def current_instance(self):
        return self.__class__.objects.get(id=self.id)

    @classmethod
    def bulk_create(cls, data: list, *args, **kwargs):
        return cls.objects.bulk_create([cls(**item) for item in data], *args, **kwargs)

class BaseModelMixin(BaseModelBaseMixin, models.Model):
    created_at = models.DateTimeField(_("Creation time"), auto_now_add=True, null=True)
    timestamp = models.DateTimeField(_("Update time"), auto_now=True, null=True)

    class Meta:
        abstract = True