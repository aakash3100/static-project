

class MenuItem:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
class Menu:
    def __init__(self):
        self.items = []
    def add_item(self, name, price, quantity):
        self.items.append(MenuItem(name, price, quantity))
    def update_item(self, name, price, quantity):
        for item in self.items:
            if item.name == name:
                item.price = price
                item.quantity = quantity
                return
        print(f"Menu item '{name}' not found.")
    def delete_item(self, name):
        self.items = [item for item in self.items if item.name != name]
    def display_menu(self):
        if not self.items:
            print("Menu is empty.")
        for item in self.items:
            print(f"{item.name} - ₹{item.price} - Quantity: {item.quantity}")
class Order:
    def __init__(self):
        self.items = []
        self.total = 0
    def add_item(self, menu, name, quantity):
        for item in menu.items:
            if item.name == name:
                if item.quantity >= quantity:
                    self.items.append((name, item.price, quantity))
                    item.quantity -= quantity
                    self.calculate_total()
                    return
                else:
                    print(f"Not enough quantity for '{name}'. Available: {item.quantity}")
                    return
        print(f"Menu item '{name}' not found.")
    def calculate_total(self):
        self.total = sum(price * quantity for _, price, quantity in self.items)
    def apply_discount(self, discount):
        self.total -= self.total * (discount / 100)
    def generate_receipt(self):
        from datetime import datetime
        print(f"Receipt - {datetime.now()}")
        for name, price, quantity in self.items:
            print(f"{name} - ₹{price} x {quantity} = ₹{price * quantity}")
        print(f"Total: ₹{self.total}")
menu = Menu()
while True:
    print("\nRestaurant Management System")
    print("1. Add a menu item")
    print("2. Update a menu item")
    print("3. Delete a menu item")
    print("4. Display menu")
    print("5. Place an order")
    print("6. Exit")
    choice = input("Enter your choice: ")
    if choice == '1':
        name = input("Name: ")
        price = float(input("Price: "))
        quantity = int(input("Quantity: "))
        menu.add_item(name, price, quantity)
    elif choice == '2':
        name = input("Name: ")
        price = float(input("New Price: "))
        quantity = int(input("New Quantity: "))
        menu.update_item(name, price, quantity)
    elif choice == '3':
        name = input("Name: ")
        menu.delete_item(name)
    elif choice == '4':
        menu.display_menu()
    elif choice == '5':
        order = Order()
        while True:
            menu.display_menu()
            name = input("Enter item name to order (or 'done' to finish): ")
            if name.lower() == 'done':
                break
            quantity = int(input("Quantity: "))
            order.add_item(menu, name, quantity)
        discount = float(input("Enter discount percentage (0-100): "))
        order.apply_discount(discount)
        order.generate_receipt()
    elif choice == '6':
        break
    else:
        print("Invalid choice. Please try again.")

