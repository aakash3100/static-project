class Vehicle:
  def __init__(self, vehicle_id, make, model, year, category):
    self.vehicle_id = vehicle_id
    self.make = make
    self.model = model
    self.year = year
    self.category = category

  def get_vehicle_id(self):
    return self.vehicle_id

  def get_make(self):
    return self.make

  def set_category(self, new_category):
    self.category = new_category

def add_vehicle(vehicles, vehicle):

  vehicle_set = {v.vehicle_id for v in vehicles}
  if vehicle.vehicle_id not in vehicle_set:
    vehicles.append(vehicle)
    print(f"Vehicle added successfully!")
  else:
    print(f"Vehicle with ID {vehicle.vehicle_id} already exists!")


def remove_vehicle(vehicles, vehicle_id):
  for index, vehicle in enumerate(vehicles):
    if vehicle.vehicle_id == vehicle_id:
      vehicles.pop(index)
      print(f"Vehicle with ID {vehicle_id} removed!")
      return
  print(f"Vehicle with ID {vehicle_id} not found!")

def search_vehicles(vehicles, search_term):
  matching_vehicles = []
  for vehicle in vehicles:
    if search_term.lower() in vehicle.make.lower() or search_term.lower() in vehicle.model.lower():
      matching_vehicles.append(vehicle)
  return matching_vehicles

def list_vehicles(vehicles):
  print("-" * 50)
  print(f"{'ID':<5} {'Make':<15} {'Model':<20} {'Year':<5} {'Category':<15}")
  print("-" * 50)
  for vehicle in vehicles:
    print(f"{vehicle.vehicle_id:<5} {vehicle.make:<15} {vehicle.model:<20} {vehicle.year:<5} {vehicle.category:<15}")
  print("-" * 50)

def categorize_vehicles(vehicles):
  categories = {}
  for vehicle in vehicles:
    if vehicle.category not in categories:
      categories[vehicle.category] = []
    categories[vehicle.category].append(vehicle)
  return categories

vehicles = []

while True:
  print("\nVehicle Rental System")
  print("1. Add Vehicle")
  print("2. Remove Vehicle")
  print("3. Search Vehicles")
  print("4. List All Vehicles")
  print("5. Categorize Vehicles")
  print("6. Exit")

  choice = input("Enter your choice (1-6): ")

  if choice == '1':
    
    vehicle_id = int(input("Enter vehicle ID: "))
    make = input("Enter vehicle make: ")
    model = input("Enter vehicle model: ")
    year = int(input("Enter vehicle year: "))
    category = input("Enter vehicle category: ")

    new_vehicle = Vehicle(vehicle_id, make, model, year, category)
    add_vehicle(vehicles, new_vehicle)

  elif choice == '2':

    vehicle_id = int(input("Enter vehicle ID to remove: "))
    remove_vehicle(vehicles, vehicle_id)

  elif choice == '3':  
    search_term = input("Enter search term (make or model): ")
    matching_vehicles = search_vehicles(vehicles, search_term)
    print(f"Search results for '{search_term}':")
    list_vehicles(matching_vehicles)

  elif choice == '4':
    list_vehicles(vehicles)

  elif choice == '5':
    categories = categorize_vehicles(vehicles)
    print("\nVehicles by category:")
    for category, vehicle_list in categories.items():
      print(f"{category}:")
      list_vehicles(vehicle_list)

  elif choice == '6':
    print("Exiting system...")
    break

  else:
    print("Invalid choice")
