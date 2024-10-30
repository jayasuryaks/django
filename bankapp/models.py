from django.db import models
from django.core.validators import RegexValidator


class BankModel(models.Model):
    ACCOUNT_TYPE_CHOICES = [
        ('savings', 'Savings Account'),
        ('current', 'Current Account'),
    ]

    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=255)

    phone = models.CharField(   
        max_length=15,
        validators=[RegexValidator(regex=r'^\+?1?\d{9,15}$')]
    )

    account_type = models.CharField(max_length=16, choices=ACCOUNT_TYPE_CHOICES)  # Using snake_case
    account_number = models.CharField(max_length=20, unique=True)  # Made unique to avoid duplicates
    password = models.CharField(max_length=128)  # Length for hashed passwords
    deposit = models.DecimalField(max_digits=15, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)  # Set once when the object is created
    updated_at = models.DateTimeField(auto_now=True)  # Updated every time the object is saved

    def __str__(self):
        return f"{self.username} - {self.account_number}"

    class Meta:
        db_table = "bank_details"  # More descriptive table name
        ordering = ['-updated_at']
