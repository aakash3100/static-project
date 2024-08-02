
import datetime
import json
class Product:
    def __init__(self, name, category, price, quantity, expiration_date):
        self.name = name
        self.category = category
        self.price = price
        self.quantity = quantity
        self.expiration_date = expiration_date
    def is_expired(self):
        return datetime.datetime.strptime(self.expiration_date, '%Y-%m-%d') < datetime.datetime.now()
    def __str__(self):
        return f"{self.name} | {self.category} | ₹{self.price:.2f} | {self.quantity} | Expires: {self.expiration_date}"
inventory = []
def add_product(name, category, price, quantity, expiration_date):
    inventory.append(Product(name, category, price, quantity, expiration_date))
def remove_product(name):
    global inventory
    inventory = [product for product in inventory if product.name != name]
def search_products(term):
    return [product for product in inventory if term.lower() in product.name.lower() or term.lower() in product.category.lower()]
def list_all_products():
    for product in inventory:
        print(product)
def categorize_products():
    categorized = {}
    for product in inventory:
        categorized.setdefault(product.category, []).append(product)
    return categorized
def remove_expired_products():
    global inventory
    inventory = [product for product in inventory if not product.is_expired()]
def save_inventory(filename):
    with open(filename, 'w') as file:
        json.dump([product.__dict__ for product in inventory], file)
def load_inventory(filename):
    global inventory
    try:
        with open(filename, 'r') as file:
            inventory = [Product(**data) for data in json.load(file)]
    except FileNotFoundError:
        print(f"{filename} not found, starting with an empty inventory.")
def main():
    load_inventory('inventory.json')
    
    while True:
        print("\nInventory Management System")
        print("1. Add a product")
        print("2. Remove a product")
        print("3. Search for products")
        print("4. List all products")
        print("5. Categorize products")
        print("6. Check for expired products")
        print("7. Save inventory to file")
        print("8. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            name = input("Name: ")
            category = input("Category: ")
            price = float(input("Price: "))
            quantity = int(input("Quantity: "))
            expiration_date = input("Expiration Date (YYYY-MM-DD): ")
            add_product(name, category, price, quantity, expiration_date)
        elif choice == '2':
            name = input("Name of product to remove: ")
            remove_product(name)
        elif choice == '3':
            term = input("Search term (name or category): ")
            for product in search_products(term):
                print(product)
        elif choice == '4':
            list_all_products()
        elif choice == '5':
            for category, products in categorize_products().items():
                print(f"\nCategory: {category}")
                for product in products:
                    print(product)
        elif choice == '6':
            remove_expired_products()
            print("Expired products removed.")
        elif choice == '7':
            save_inventory('inventory.json')
            print("Inventory saved.")
        elif choice == '8':
            save_inventory('inventory.json')
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")

main()
