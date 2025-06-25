from django.db import models


class User(models.Model):
    name = models.TextField(
        verbose_name="Ник пользователя",
    )
    balance = models.IntegerField(
        blank=True, null=True, verbose_name="Баланс пользователя"
    )
    winner_balance = models.IntegerField(
        blank=True, null=True, verbose_name="Общая сумма выигрыша"
    )

    class Meta:
        db_table = "Users"
        ordering = ["-date_created"]
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        unique_together = "field1"

    def __str__(self):
        return f"{self.name}"
